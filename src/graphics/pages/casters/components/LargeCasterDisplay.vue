<template>
    <div class="large-caster-display">
        <div class="head">
            <image-loader
                :src="caster.imageUrl"
                class="caster-image"
            />
        </div>
        <div class="details">
            <fitted-content
                :max-width="365"
                align="center"
            >
                <opacity-swap-transition>
                    <div :key="`${caster.name}_${caster.pronouns}`">
                        <span class="name">{{ caster.name }}</span>
                        <badge
                            class="pronouns"
                            :color="index % 2 === 1 ? '#222222' : '#FFFFFF'"
                        >
                            {{ caster.pronouns }}
                        </badge>
                    </div>
                </opacity-swap-transition>
            </fitted-content>
            <fitted-content
                :max-width="365"
                align="center"
                class="twitter"
            >
                <opacity-swap-transition>
                    <span :key="`${caster.twitter}`">
                        {{ caster.twitter }}
                    </span>
                </opacity-swap-transition>
            </fitted-content>
        </div>
    </div>
</template>

<script lang="ts">
import { Caster } from 'schemas';
import { defineComponent, PropType } from 'vue';
import ImageLoader from '../../../components/ImageLoader.vue';
import FittedContent from '../../../components/FittedContent.vue';
import Badge from '../../../components/Badge.vue';
import OpacitySwapTransition from '../../../components/OpacitySwapTransition.vue';

export default defineComponent({
    name: 'LargeCasterDisplay',

    components: { OpacitySwapTransition, Badge, FittedContent, ImageLoader },

    props: {
        caster: {
            type: Object as PropType<Caster>,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    }
});
</script>

<style lang="scss" scoped>
@import '../../../styles/constants';

.large-caster-display {
    width: 400px;
    border-radius: 12px;
    background-color: $text-background-alpha;
    border-width: 2px;
    border-style: solid;
    padding: 10px;

    &:nth-child(even) {
        border-color: $accent-1;

        > .details {
            @include wave-bg($accent-1, $accent-1-alt);

            color: #222;
        }
    }

    &:nth-child(odd) {
        border-color: $accent-2;

        > .details {
            @include wave-bg($accent-2, $accent-2-alt);
        }
    }

    > .head {
        width: 400px;
        height: 400px;
        border-radius: $default-border-radius;
        display: flex;
        align-items: center;
        justify-content: center;

        > .caster-image {
            width: 250px;
            height: 250px;
            border-radius: 9999px;
            overflow: hidden;
            background-color: rgba(0, 0, 0, 0.25);
        }
    }

    > .details {
        padding: 10px 16px 12px;
        border-radius: $default-border-radius;

        .name {
            font-size: 40px;
            line-height: 50px;
            font-weight: 700;
        }

        .pronouns {
            font-size: 18px;
            transform: translateY(-4px);
        }

        .twitter {
            font-size: 20px;
            font-weight: 400;
        }
    }
}
</style>
