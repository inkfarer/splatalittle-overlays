<template>
    <div class="caster-container">
        <large-caster-display
            v-for="(caster, id, index) in casterStore.casters"
            :key="`caster_${id}`"
            :caster="caster"
            :index="index"
            class="caster-display"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useCasterStore } from '../../../shared/store/casterStore';
import LargeCasterDisplay from './components/LargeCasterDisplay.vue';
import { bindEntranceToTimelineGenerator } from '../../helpers/obsSourceHelper';
import gsap from 'gsap';

export default defineComponent({
    name: 'Casters',

    components: { LargeCasterDisplay },

    setup() {
        const casterStore = useCasterStore();

        onMounted(() => {
            bindEntranceToTimelineGenerator(() => {
                const revealTl = gsap.timeline({ delay: 0.9 });

                revealTl
                    .fromTo(
                        '.caster-display', {
                            y: -35,
                            opacity: 0
                        }, {
                            duration: 0.35,
                            y: 0,
                            opacity: 1,
                            ease: 'power2.out',
                            stagger: 0.2,
                            delay: 0.1
                        });

                return revealTl;
            });
        });

        return {
            casterStore
        };
    }
});
</script>

<style lang="scss" scoped>
.caster-container {
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    align-items: center;
    justify-content: center;

    > .caster-display:not(:last-child) {
        margin-right: 50px;
    }
}
</style>
