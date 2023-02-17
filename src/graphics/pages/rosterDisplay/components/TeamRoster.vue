<template>
    <div
        class="team-roster"
        :class="[`position-${position}`, `team-${team}`]"
    >
        <div class="team-roster-content">
            <div class="team-name-wrapper">
                <fitted-content
                    :max-width="450"
                    class="team-name"
                    align="center"
                >
                    <span>{{ $helpers.addDots(teamData?.name) }}</span>
                </fitted-content>
            </div>
            <div class="players">
                <div
                    v-for="player in players"
                    :key="player.name"
                >
                    <fitted-content
                        :max-width="450"
                        class="team-player"
                        :align="position === '1' ? 'left' : 'right'"
                    >
                        {{ $helpers.addDots(player.name) }}
                    </fitted-content>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed, PropType } from 'vue';
import FittedContent from '../../../components/FittedContent.vue';
import { useActiveRoundStore } from '../../../../shared/store/activeRoundStore';

export default defineComponent({
    name: 'TeamRoster',

    components: { FittedContent },

    props: {
        team: {
            type: String as PropType<'A' | 'B'>,
            required: true
        },
        position: {
            type: String as PropType<'1' | '2'>,
            required: true
        }
    },

    setup(props) {
        const activeRoundStore = useActiveRoundStore();
        const teamData = computed(() => props.team === 'A'
            ? activeRoundStore.activeRound.teamA
            : activeRoundStore.activeRound.teamB);

        return {
            teamData,
            players: computed(() => teamData.value?.players.slice(0, 8))
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/constants';

.team-roster {
    width: 500px;
    height: 585px;
    margin: 0 45px;
    border-radius: 12px;
    background-color: $text-background-alpha;
    padding: 10px;
    overflow: hidden;

    &.position-1 {
        .players {
            align-items: flex-start;
        }
    }

    &.position-2 {
        .players {
            align-items: flex-end;
        }
    }

    &.team-A {
        border: 2px solid $accent-2;

        .team-name-wrapper {
            @include wave-bg($accent-2, $accent-2-alt);
        }
    }

    &.team-B {
        border: 2px solid $accent-1;

        .team-name-wrapper {
            @include wave-bg($accent-1, $accent-1-alt);

            color: #222;
        }
    }

    .team-roster-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .team-name-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 120px;
            border-radius: $default-border-radius;
            flex-shrink: 0;
        }

        .team-name {
            font-size: 50px;
            font-weight: 700;
        }

        .players {
            width: calc(100% - 24px);
            padding: 12px 12px 12px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            flex-grow: 1;
        }

        .team-player {
            font-size: 40px;
            height: 55px;
        }
    }
}
</style>
