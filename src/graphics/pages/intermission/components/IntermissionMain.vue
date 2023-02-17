<template>
    <div class="intermission-main">
        <div class="flavor-text-wrapper">
            <opacity-swap-transition>
                <div
                    :key="mainFlavorText"
                    class="flavor-text"
                >
                    {{ mainFlavorText }}
                </div>
            </opacity-swap-transition>
        </div>
        <div class="info-rows">
            <intermission-main-info-row
                :value="nowPlaying"
                :visible="musicShown"
                icon="music"
            />
            <intermission-main-info-row
                :visible="nextRoundTimeVisible"
                icon="clock"
            >
                <span v-if="nextRoundStartDiffNow > 1">
                    Resuming in <span class="minutes">~{{ nextRoundStartDiffNow }}</span> minutes...
                </span>
                <span v-else-if="nextRoundStartDiffNow === 1">
                    Resuming in <span class="minutes">~{{ nextRoundStartDiffNow }}</span> minute...
                </span>
                <span v-else>
                    The stream will resume soon!
                </span>
            </intermission-main-info-row>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { computed, ref, watch } from 'vue';
import IntermissionMainInfoRow from './IntermissionMainInfoRow.vue';
import { setNextStageTimer } from '../../../helpers/timerHelper';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';
import { getSongNameAsString } from '../../../helpers/musicHelper';
import { useMusicStore } from '../../../../shared/store/musicStore';
import { useBreakScreenStore } from '../../../../shared/store/breakScreenStore';

library.add(faMusic, faClock);

export default defineComponent({
    name: 'IntermissionMain',

    components: { OpacitySwapTransition, IntermissionMainInfoRow },

    setup() {
        const musicStore = useMusicStore();
        const breakScreenStore = useBreakScreenStore();
        const nextRoundStartDiffNow = ref(0);

        watch(() => breakScreenStore.nextRoundStartTime.startTime, startTime => {
            setNextStageTimer(startTime, (newValue) => nextRoundStartDiffNow.value = newValue);
        }, { immediate: true });

        return {
            nowPlaying: computed(() => getSongNameAsString(musicStore.nowPlaying)),
            musicShown: computed(() => musicStore.musicShown),
            nextRoundStartDiffNow,
            nextRoundTimeVisible: computed(() => breakScreenStore.nextRoundStartTime.isVisible),
            mainFlavorText: computed(() => breakScreenStore.mainFlavorText)
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.intermission-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    $flavor-text-size: 110px;

    .flavor-text-wrapper {
        width: 1400px;
        height: $flavor-text-size * 2;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 10px;
    }

    .flavor-text {
        font-family: 'Gota';
        font-weight: 400;
        font-size: $flavor-text-size;
        max-height: $flavor-text-size * 2;
        overflow: hidden;
        color: $accent-1;
        overflow-wrap: anywhere;
    }

    span.minutes {
        font-weight: 800;
    }

    .info-rows {
        height: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
