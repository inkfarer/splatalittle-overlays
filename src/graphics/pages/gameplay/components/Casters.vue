<template>
    <transition
        @enter="castersEnter"
        @leave="castersLeave"
        @before-enter="beforeCastersEnter"
    >
        <div
            v-if="castersVisible"
            class="casters-wrapper"
        >
            <div class="casters-header">
                Commentators
            </div>
            <div class="casters-content">
                <div
                    v-for="(caster, id, index) in casterStore.casters"
                    :key="id"
                    class="caster-item"
                >
                    <fitted-content :max-width="280">
                        <span class="caster-name">{{ caster.name }}</span>
                        <badge
                            class="caster-pronouns"
                            :color="index % 2 === 1 ? '#222222' : '#FFFFFF'"
                        >
                            {{ caster.pronouns }}
                        </badge>
                    </fitted-content>
                    <fitted-content
                        :max-width="280"
                        class="caster-twitter"
                    >
                        {{ caster.twitter }}
                    </fitted-content>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { NodeCGBrowser } from 'nodecg/browser';
import { defineComponent } from 'vue';
import FittedContent from '../../../components/FittedContent.vue';
import Badge from '../../../components/Badge.vue';
import { ref } from 'vue';
import gsap from 'gsap';
import { useCasterStore } from '../../../../shared/store/casterStore';
import { DASHBOARD_BUNDLE_NAME } from '../../../../shared/constants';

export default defineComponent({
    name: 'Casters',

    components: { FittedContent, Badge },

    setup() {
        const casterStore = useCasterStore();
        const castersVisible = ref(false);

        nodecg.listenFor('mainShowCasters', DASHBOARD_BUNDLE_NAME, () => {
            if (!castersVisible.value) {
                castersVisible.value = true;

                setTimeout(() => {
                    castersVisible.value = false;
                }, 15 * 1000);
            }
        });

        return {
            casterStore,
            castersVisible,

            castersEnter: (elem: HTMLElement, done: gsap.Callback) => {
                gsap.to(elem, { y: 0, opacity: 1, ease: 'power2.out', onComplete: done });
            },
            beforeCastersEnter: (elem: HTMLElement) => {
                gsap.set(elem, { y: 25, opacity: 0 });
            },
            castersLeave: (elem: HTMLElement, done: gsap.Callback) => {
                gsap.to(elem, { y: 25, opacity: 0, ease: 'power2.in', onComplete: done });
            }
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.casters-wrapper {
    @include gradient-border();

    position: absolute;
    bottom: 30px;
    right: 60px;
    width: 300px;
    padding: 6px;
    overflow: hidden;
    background-color: $text-background-alpha;
    border-radius: 12px;

    > .casters-header {
        font-size: 28px;
        font-weight: 400;
        text-align: center;
        width: 100%;
        padding: 4px 0;
        margin-bottom: 5px;
        border-radius: $default-border-radius;
    }

    > .casters-content {
        min-height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        > .caster-item {
            padding: 6px 10px 10px;
            border-radius: 8px;

            &:not(:last-child) {
                margin-bottom: 6px;
            }

            &:nth-child(even) {
                @include wave-bg($accent-1, $accent-1-alt);

                color: #222;
            }

            &:nth-child(odd) {
                @include wave-bg($accent-2, $accent-2-alt);
            }

            .caster-name {
                font-size: 30px;
                font-weight: 700;
            }

            .caster-pronouns {
                font-size: 20px;
                transform: translateY(-3px);
            }

            .caster-twitter {
                font-size: 22px;
                margin-top: -6px;
                font-weight: 400;
            }
        }
    }
}
</style>
