<template>
    <opacity-swap-transition>
        <fitted-content
            :key="`${teamAName}_${teamBName}`"
            :max-width="1200"
        >
            <div class="next-round-content-wrapper">
                <span class="next-up font-numeric">Next up:</span>
                <div class="team-name-container">
                    <div class="team-name">{{ $helpers.addDots(teamA?.name) }}</div>
                </div>
                <span class="versus">vs</span>
                <div class="team-name-container">
                    <div class="team-name">{{ $helpers.addDots(teamB?.name) }}</div>
                </div>
            </div>
        </fitted-content>
    </opacity-swap-transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed } from 'vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import FittedContent from '../../../components/FittedContent.vue';
import { useNextRoundStore } from '../../../../shared/store/nextRoundStore';

export default defineComponent({
    name: 'LowerThirdNextRound',

    components: { FittedContent, OpacitySwapTransition },

    setup() {
        const nextRoundStore = useNextRoundStore();

        return {
            teamA: computed(() => nextRoundStore.nextRound.teamA),
            teamB: computed(() => nextRoundStore.nextRound.teamB)
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.next-round-content-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;

    .next-up {
        color: $accent-1;
        margin-right: 10px;
    }

    .team-name {
        font-size: 40px;
        font-weight: 500;
    }

    .versus {
        margin: 0 9px 2px;
        color: $accent-1;
        font-weight: 700;
        font-size: 44px;

        &:first-letter {
            color: $accent-2-dark-bg;
        }
    }

    .team-name-container {
        text-align: center;
    }
}
</style>
