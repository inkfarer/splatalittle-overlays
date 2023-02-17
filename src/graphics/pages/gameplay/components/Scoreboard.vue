<template>
    <transition
        @enter="scoreboardEnter"
        @leave="scoreboardLeave"
        @before-enter="beforeScoreboardEnter"
    >
        <div
            v-if="scoreboardStore.scoreboardData.isVisible"
            ref="scoreboardElem"
            class="scoreboard-wrapper"
        >
            <div class="scoreboard-teams">
                <div class="scoreboard-team-layout">
                    <div class="team-display team-alpha">
                        <opacity-swap-transition>
                            <fitted-content
                                :key="teamAName"
                                :max-width="290"
                                class="team-name"
                                align="right"
                            >
                                <div class="team-name-container">
                                    <div class="team-name-text">{{ teamAName }}</div>
                                </div>
                            </fitted-content>
                        </opacity-swap-transition>
                        <div
                            class="score-color"
                            :style="{ backgroundColor: teamA?.color, color: getContrastingTextColor(teamA?.color ?? '#FFFFFF') }"
                        >
                            {{ teamA?.score }}
                        </div>
                    </div>
                    <div class="separator" />
                    <div class="team-display team-bravo">
                        <opacity-swap-transition>
                            <fitted-content
                                :key="teamBName"
                                :max-width="290"
                                class="team-name"
                                align="right"
                            >
                                <div class="team-name-container">
                                    <div class="team-name-text">{{ teamBName }}</div>
                                </div>
                            </fitted-content>
                        </opacity-swap-transition>
                        <div
                            class="score-color"
                            :style="{ backgroundColor: teamB?.color, color: getContrastingTextColor(teamB?.color ?? '#FFFFFF') }"
                        >
                            {{ teamB?.score }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="scoreboard-extra">
                <opacity-swap-transition>
                    <fitted-content
                        :key="scoreboardStore.scoreboardData.flavorText"
                        :max-width="346"
                        class="flavor-text"
                        align="center"
                    >
                        {{ scoreboardStore.scoreboardData.flavorText }}
                    </fitted-content>
                </opacity-swap-transition>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import FittedContent from '../../../components/FittedContent.vue';
import { computed } from 'vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import { addDots } from '../../../../shared/helpers/stringHelper';
import gsap from 'gsap';
import { useActiveRoundStore } from '../../../../shared/store/activeRoundStore';
import { useScoreboardStore } from '../../../../shared/store/scoreboardStore';
import { getContrastingTextColor } from '@iplsplatoon/vue-components';
import { COLORS } from '../../../styles/colors';

export default defineComponent({
    name: 'Scoreboard',

    components: { OpacitySwapTransition, FittedContent },

    setup() {
        const activeRoundStore = useActiveRoundStore();
        const teamA = computed(() => activeRoundStore.activeRound.teamA);
        const teamB = computed(() => activeRoundStore.activeRound.teamB);

        const scoreboardStore = useScoreboardStore();
        const scoreboardElem = ref<HTMLDivElement | null>(null);

        onMounted(() => {
            watch(
                () => activeRoundStore.swapColorsInternally,
                newValue => {
                    if (scoreboardElem.value) {
                        gsap.to(scoreboardElem.value, {
                            duration: 0.5,
                            '--border-gradient-step-1': newValue ? COLORS.accent2 : COLORS.accent1,
                            '--border-gradient-step-2': newValue ? COLORS.accent1 : COLORS.accent2
                        });
                    }
                },
                { immediate: true });
        });

        return {
            teamA,
            teamB,
            teamAName: computed(() => addDots(teamA.value.name)),
            teamBName: computed(() => addDots(teamB.value.name)),
            scoreboardStore,
            scoreboardEnter: (elem: HTMLElement, done: gsap.Callback) => {
                gsap.to(elem, { y: 0, opacity: 1, ease: 'power2.out', onComplete: done });
            },
            beforeScoreboardEnter: (elem: HTMLElement) => {
                gsap.set(elem, {
                    y: -25,
                    opacity: 0,
                    '--border-gradient-step-1': activeRoundStore.swapColorsInternally ? COLORS.accent2 : COLORS.accent1,
                    '--border-gradient-step-2': activeRoundStore.swapColorsInternally ? COLORS.accent1 : COLORS.accent2
                });
            },
            scoreboardLeave: (elem: HTMLElement, done: gsap.Callback) => {
                gsap.to(elem, { y: -25, opacity: 0, ease: 'power2.in', onComplete: done });
            },
            getContrastingTextColor,
            scoreboardElem
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.scoreboard-wrapper {
    --border-gradient-step-1: #{$accent-1};
    --border-gradient-step-2: #{$accent-2};

    position: absolute;
    top: 30px;
    left: 30px;
    width: 390px;
    height: 170px;

    > .scoreboard-teams {
        @include gradient-border(linear-gradient(0deg, var(--border-gradient-step-1), var(--border-gradient-step-2)));
        @include wave-bg(rgba(26, 26, 26, 0.95), rgba(17, 17, 17, 0.95));

        border-radius: 12px;
        padding: 6px;
        position: relative;
        max-width: 100%;
        height: 127px;
        margin: 0;
        overflow: hidden;

        > .scoreboard-team-layout {
            display: grid;
            grid-template-rows: 1fr 2px 1fr;
            row-gap: 4px;
            height: 100%;
            align-items: center;
            position: relative;
            z-index: 2;

            > .separator {
                width: 80%;
                height: 100%;
                background-color: #fff;
                opacity: 0.5;
                justify-self: center;
            }

            > .team-display {
                display: flex;
                align-items: center;
                height: 100%;
                overflow: hidden;
                border-radius: 4px;

                .score-color {
                    height: 100%;
                    flex-grow: 1;
                    text-align: center;
                    font-size: 42px;
                    line-height: 58px;
                    position: relative;
                    transition-property: color, background-color;
                    transition-duration: 500ms;
                    font-weight: 900;
                    border-radius: 6px;

                    &:after {
                        content: '';
                        width: 100%;
                        height: 50%;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        border-radius: 0 4px 4px 0;
                        background-color: rgba(0, 0, 0, 0.25);
                        mix-blend-mode: overlay;
                    }
                }

                > .team-name {
                    width: 290px;
                    margin: 0 16px;
                    font-weight: 500;
                }

                .team-name-container {
                    text-align: center;
                }

                .team-name-text {
                    font-size: 30px;
                }
            }
        }
    }

    > .scoreboard-extra {
        margin: 6px 12px 0;
        height: 38px;
        border-radius: 6px;
        background-color: rgba(17, 17, 17, 0.85);

        > .flavor-text {
            font-size: 24px;
            margin-left: 10px;
        }
    }
}
</style>
