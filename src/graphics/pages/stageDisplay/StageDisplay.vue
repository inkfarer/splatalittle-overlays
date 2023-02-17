<template>
    <transition
        mode="out-in"
        @enter="stageWrapperEnter"
        @before-enter="beforeStageEnter"
        @leave="stageLeave"
    >
        <div
            :key="matchId"
            class="stage-display-wrapper"
        >
            <transition
                v-for="(game, index) in games"
                :key="`game_${index}`"
                mode="out-in"
                @enter="stageEnter"
                @leave="stageLeave"
                @before-enter="beforeStageEnter"
            >
                <stage
                    :key="`${index}_${game.mode}_${game.stage}`"
                    :game="game"
                />
            </transition>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed, onMounted } from 'vue';
import gsap from 'gsap';
import { getStageImagePath, loadAndCheckIfImageExists } from '../../helpers/imageHelper';
import { addDots } from '../../../shared/helpers/stringHelper';
import { bindEntranceToTimelineGenerator } from '../../helpers/obsSourceHelper';
import { useActiveRoundStore } from '../../../shared/store/activeRoundStore';
import Stage from './components/Stage.vue';

const STAGE_SHOW_HIDE_ANIMATION_DURATION = 0.35;

export default defineComponent({
    name: 'StageDisplay',

    components: { Stage },

    setup() {
        const activeRoundStore = useActiveRoundStore();
        const games = computed(() => activeRoundStore.activeRound.games);

        onMounted(() => {
            bindEntranceToTimelineGenerator(() => {
                const revealTl = gsap.timeline({ delay: 0.9 });

                revealTl
                    .fromTo(
                        '.stage', {
                            y: -35,
                            opacity: 0
                        }, {
                            duration: STAGE_SHOW_HIDE_ANIMATION_DURATION,
                            y: 0,
                            opacity: 1,
                            ease: 'power2.out',
                            stagger: 0.08,
                            delay: 0.1
                        });

                return revealTl;
            });
        });

        function stageEnter(elem: HTMLElement, done: gsap.Callback) {
            const elems = elem.classList.contains('stage') ? elem : elem.querySelectorAll('.stage');

            gsap.to(elems, {
                duration: STAGE_SHOW_HIDE_ANIMATION_DURATION,
                opacity: 1,
                y: 0,
                ease: 'power2.out',
                onComplete: done,
                stagger: 0.08
            });
        }

        return {
            games,
            winnerNames: computed(() => games.value?.map(game => {
                switch (game.winner) {
                    case 'alpha':
                        return {
                            name: addDots(activeRoundStore.activeRound.teamA.name)
                        };
                    case 'bravo':
                        return {
                            name: addDots(activeRoundStore.activeRound.teamB.name)
                        };
                    default:
                        return { name: undefined };
                }
            })),
            matchId: computed(() => activeRoundStore.activeRound.match.id),
            getStageImagePath,

            async stageEnter(elem: HTMLElement, done: gsap.Callback) {
                await loadAndCheckIfImageExists(getStageImagePath(elem.dataset.stage));
                stageEnter(elem, done);
            },
            stageWrapperEnter(elem: HTMLElement, done: gsap.Callback) {
                stageEnter(elem, done);
            },
            beforeStageEnter(elem: HTMLElement) {
                gsap.set(elem.classList.contains('stage') ? elem : elem.querySelectorAll('.stage'), { y: -35, opacity: 0 });
            },
            stageLeave(elem: HTMLElement, done: gsap.Callback) {
                const elems = elem.classList.contains('stage') ? elem : elem.querySelectorAll('.stage');

                gsap.to(elems, {
                    duration: STAGE_SHOW_HIDE_ANIMATION_DURATION,
                    opacity: 0,
                    y: 35,
                    ease: 'power2.in',
                    stagger: 0.08,
                    onComplete: done
                });
            }
        };
    }
});
</script>

<style lang="scss">
@import '../../styles/constants';

.stage-display-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 50px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
