<template>
    <div class="intermission-wrapper">
        <div class="intermission-main-content">
            <img
                class="tournament-logo"
                :src="require('img/logo.png')"
            >
            <div class="intermission-slides">
                <transition
                    mode="out-in"
                    @leave="slideLeave"
                    @enter="slideEnter"
                    @before-enter="beforeSlideEnter"
                >
                    <component :is="activeBreakSlide" />
                </transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IntermissionMain from './components/IntermissionMain.vue';
import IntermissionNextUp from './components/IntermissionNextUp.vue';
import { computed } from 'vue';
import gsap from 'gsap';
import { useSlides } from '../../helpers/useSlides';
import OpacitySwapTransition from '../../components/OpacitySwapTransition.vue';
import { useNextRoundStore } from '../../../shared/store/nextRoundStore';

export default defineComponent({
    name: 'Intermission',

    components: { OpacitySwapTransition, IntermissionMain, IntermissionNextUp },

    setup() {
        const nextRoundStore = useNextRoundStore();

        const slides = useSlides([
            { component: 'IntermissionMain' },
            { component: 'IntermissionNextUp', enabled: computed(() => nextRoundStore.nextRound.showOnStream) }
        ]);

        return {
            activeBreakSlide: slides.activeComponent,
            slideLeave(elem: HTMLElement, done: gsap.Callback) {
                gsap.to(elem, { y: 15, opacity: 0, ease: 'power2.in', duration: 0.5, onComplete: done });
            },
            beforeSlideEnter(elem: HTMLElement) {
                gsap.set(elem, { y: -15, opacity: 0 });
            },
            slideEnter(elem: HTMLElement, done: gsap.Callback) {
                gsap.to(elem, { y: 0, opacity: 1, ease: 'power2.out', duration: 0.5, onComplete: done });
            }
        };
    }
});
</script>

<style lang="scss">
@import '../../styles/constants';

.intermission-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.intermission-main-content {
    border-radius: $default-border-radius;
    z-index: 100;
    padding: 15px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > .tournament-logo {
        width: 500px;
        filter: drop-shadow(0 0 55px rgba(213, 185, 24, 0.25));
    }

    > .intermission-slides {
        height: 350px;
        padding: 0 25px;
        margin-top: 20px;
        width: 750px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        //background-color: rgba(0, 0, 0, 0.1);

        $border-accent: adjust-color($accent-1, $alpha: 0.5);
        //border: 10px solid;
        //border-image-slice: 1;
        //border-image-source: linear-gradient(45deg, $border-accent 0%, transparent 20%, transparent 80%, $border-accent 100%);
    }
}
</style>
