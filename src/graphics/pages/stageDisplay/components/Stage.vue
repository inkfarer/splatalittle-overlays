<template>
    <div
        ref="stageElem"
        class="stage"
        :data-stage="props.game.stage"
        :class="{
            skipped: isSkipped,
            'darken-text': props.game.winner === 'none',
            [`game-count-${activeRoundStore.activeRound.games.length}`]: true
        }"
    >
        <div class="stage-content">
            <div
                class="stage-image"
                :style="{ backgroundImage: `url('${imagePath}')` }"
            >
                <div class="stage-mode-anchor">
                    <div class="stage-mode">
                        <span class="stage-data-text">{{ props.game.mode }}</span>
                    </div>
                </div>
            </div>
            <div class="stage-data">
                <div class="stage-name">
                    <span class="stage-name-text">{{ props.game.stage }}</span>
                </div>
            </div>
            <opacity-swap-transition>
                <div
                    v-if="props.game.winner !== 'none'"
                    :key="winnerName"
                    class="stage-winner"
                    :class="`winner-${props.game.winner}`"
                >
                    <div class="stage-winner-name">{{ winnerName }}</div>
                </div>
            </opacity-swap-transition>
            <div class="covers-content darkened-background" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import { ArrayElement } from '../../../types/TypeUtils';
import { ActiveRound } from 'schemas';
import { computed, onMounted, ref, watch } from 'vue';
import { getStageImagePath } from '../../../helpers/imageHelper';
import { useActiveRoundStore } from '../../../../shared/store/activeRoundStore';
import gsap from 'gsap';
import { COLORS } from '../../../styles/colors';

const props = defineProps<{
    game: ArrayElement<ActiveRound['games']>
}>();

const activeRoundStore = useActiveRoundStore();
const stageElem = ref<HTMLDivElement | null>();

onMounted(() => {
    watch(
        () => props.game.winner,
        newValue => {
            gsap.to(stageElem.value, {
                duration: 0.5,
                '--border-gradient-step-1': newValue === 'alpha' ? COLORS.accent2 : COLORS.accent1,
                '--border-gradient-step-2': newValue === 'bravo' ? COLORS.accent1 : COLORS.accent2
            });
        },
        { immediate: true });
});

const winnerName = computed(() => {
    switch (props.game.winner) {
        case 'alpha':
            return activeRoundStore.activeRound.teamA.name;
        case 'bravo':
            return activeRoundStore.activeRound.teamB.name;
        default:
            return undefined;
    }
});

const imagePath = computed(() => getStageImagePath(props.game.stage));

const isSkipped = computed(() => props.game.winner === 'none' && activeRoundStore.activeRound.match.isCompleted);
</script>

<style lang="scss">
@import '../../../styles/constants';

.stage {
    --border-gradient-step-1: #{$accent-1};
    --border-gradient-step-2: #{$accent-2};

    height: 650px;
    transition-property: filter;
    transition-duration: 500ms;

    &.game-count-7 {
        width: 225px;

        .stage-name {
            font-size: 32px !important;
        }
    }

    &.game-count-5 {
        width: 300px;
    }

    &.game-count-3 {
        width: 325px;
    }

    &:not(:last-child) {
        margin-right: 35px;
    }

    &.skipped {
        filter: grayscale(0.75);
        opacity: 0.95;

        .stage-data, .stage-mode {
            color: #AAA;
        }
    }

    &.darkened {
        .stage-content {
            filter: grayscale(0.5);
        }

        &.darken-text {
            .stage-data {
                color: #AAA !important;
            }
        }
    }

    .stage-content {
        @include gradient-border(linear-gradient(270deg, var(--border-gradient-step-1), var(--border-gradient-step-2)));

        width: 100%;
        height: 100%;
        border-radius: 12px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: white;
        padding: 8px;
        background-color: $text-background-alpha;

        .stage-winner {
            position: absolute;
            top: -6px;
            left: -18px;
            z-index: 2;
            padding: 4px 12px;
            border-radius: 12px;
            overflow-wrap: anywhere;
            max-height: 340px;
            max-width: 90%;
            overflow: hidden;
            font-weight: 600;

            @supports not (overflow-wrap: anywhere) {
                word-break: break-all;
            }

            &.winner-alpha .stage-winner-name {
                @include wave-bg-left-align($accent-2, $accent-2-alt);
            }

            &.winner-bravo .stage-winner-name {
                @include wave-bg-left-align($accent-1, $accent-1-alt);

                color: #222;
            }

            .stage-winner-name {
                font-size: 30px;
                line-height: 38px;
                display: inline;
                -webkit-box-decoration-break: clone;
                padding: 0 10px 2px;
                filter: url('src/assets/roundedCornerFilter.svg#round');
            }
        }

        .stage-mode-anchor {
            position: relative;
            top: 100%;
        }

        .stage-mode {
            z-index: 5;
            font-size: 26px;
            line-height: 32px;
            background-color: $text-background-alpha-50;
            backdrop-filter: blur(5px);
            padding: 4px 12px;
            width: calc(100% - 24px);
            position: absolute;
            bottom: 0;
        }

        .stage-data {
            width: 100%;
            z-index: 2;
            transition: color 500ms;

            .stage-name {
                text-align: center;
                font-size: 36px;
                font-weight: 500;
                line-height: 43px;
                padding: 12px 8px 12px;
                border-radius: 4px;
            }
        }

        .covers-content {
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            position: absolute;
            top: 2px;
            left: 2px;
            border-radius: 12px;
        }

        .darkened-background {
            background-color: rgba(34, 34, 34, 0);
            transition: background-color 500ms;
        }

        .stage-image {
            z-index: 0;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 99%;
            width: 100%;
            height: 100%;
            transform-origin: center;
            border-radius: 4px;
        }
    }
}
</style>
