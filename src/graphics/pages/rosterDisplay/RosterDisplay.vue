<template>
    <div class="rosters-layout">
        <team-roster
            team="A"
            position="1"
        />
        <div class="versus-container">
            <div class="versus">VS</div>
            <div class="versus blurred">VS</div>
        </div>
        <team-roster
            team="B"
            position="2"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TeamRoster from './components/TeamRoster.vue';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { bindEntranceToTimeline } from '../../helpers/obsSourceHelper';
import { onMounted } from 'vue';

export default defineComponent({
    name: 'RosterDisplay',

    components: { TeamRoster },

    setup() {
        onMounted(() => {
            const teamRevealTl = gsap.timeline({
                delay: 0.75
            });
            const versusSplitText = new SplitText('.versus', { type: 'chars' });

            teamRevealTl
                .fromTo(
                    '.rosters-layout .team-roster.team-A',
                    { opacity: 0, x: -35 },
                    { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', delay: 0.5 },
                    'rosters')
                .fromTo(
                    '.rosters-layout .team-roster.team-B',
                    { opacity: 0, x: 35 },
                    { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', delay: 0.6 },
                    'rosters')
                .fromTo(
                    versusSplitText.chars,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.5, ease: 'none', stagger: 0.25 },
                    '-=0.35');

            bindEntranceToTimeline(teamRevealTl);
        });
    }
});
</script>

<style lang="scss">
@import '../../styles/constants';

.rosters-layout {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .versus-container {
        position: relative;
    }

    .versus {
        font-size: 150px;
        font-family: 'Gota';
        font-weight: 400;
        text-align: center;
        color: $accent-1;

        > div:first-child {
            color: $accent-2;
        }

        &.blurred {
            position: absolute;
            top: 0;
            left: 0;
            filter: blur(16px) opacity(0.75);
        }
    }
}
</style>
