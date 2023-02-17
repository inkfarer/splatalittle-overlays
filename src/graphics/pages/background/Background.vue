<template>
    <canvas
        ref="backgroundCanvas"
    />
</template>

<script lang="ts" setup>
import starParticle from 'img/star.png';
import * as PIXI from '../../helpers/pixi';
import { gsap } from 'gsap';
import { GRAPHIC_HEIGHT, GRAPHIC_WIDTH } from '../../../shared/constants';
import { onMounted, ref } from 'vue';

function createApplication(canvas: HTMLCanvasElement): PIXI.Application {
    const app = new PIXI.Application({
        width: GRAPHIC_WIDTH,
        height: GRAPHIC_HEIGHT,
        view: canvas,
        backgroundAlpha: 0
    });

    app.ticker.stop();
    gsap.ticker.add((time) => {
        app.ticker.update(time * 1000);
    });

    return app;
}

async function initBackground(app: PIXI.Application) {
    const container = new PIXI.Container();
    container.width = app.view.width;
    container.height = app.view.height;
    container.x = 0;
    container.y = 0;

    const starTexture = await PIXI.Assets.load(starParticle);

    new PIXI.Emitter(container, {
        lifetime: { min: 2, max: 30 },
        frequency: 0.1,
        particlesPerWave: 2,
        spawnChance: 0.75,
        maxParticles: 250,
        pos: { x: -500, y: -100 },
        addAtBack: true,
        autoUpdate: true,
        behaviors: [
            {
                type: 'spawnShape',
                config: {
                    type: 'rect',
                    data: { x: 0, y: 100, w: GRAPHIC_WIDTH + 200, h: GRAPHIC_HEIGHT }
                }
            },
            {
                type: 'alpha',
                config: {
                    alpha: {
                        list: [
                            {
                                value: 0,
                                time: 0
                            },
                            {
                                value: 1,
                                time: 0.05
                            },
                            {
                                value: 0,
                                time: 1
                            }
                        ],
                    },
                }
            },
            {
                type: 'scale',
                config: {
                    minMult: 0.5,
                    scale: {
                        list: [
                            {
                                value: 0.4,
                                time: 0
                            },
                            {
                                value: 0.1,
                                time: 1
                            }
                        ],
                    },
                }
            },
            {
                type: 'movePath',
                config: {
                    path: 'cos(x/100) * 30',
                    speed: {
                        list: [
                            {
                                value: 125,
                                time: 0
                            },
                            {
                                value: 15,
                                time: 1
                            }
                        ],
                        isStepped: false
                    },
                }
            },
            {
                type: 'rotation',
                config: {
                    minStart: -15,
                    maxStart: 15,
                    minSpeed: 0,
                    maxSpeed: 15,
                    accel: 1
                }
            },
            {
                type: 'textureSingle',
                config: {
                    texture: starTexture
                }
            },
            {
                type: 'colorStatic',
                config: {
                    color: '#A6941D'
                }
            }
        ]
    });

    app.stage.addChild(container);
}

const backgroundCanvas = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
    if (backgroundCanvas.value == null) {
        throw new Error('Failed to create canvas');
    }

    const app = createApplication(backgroundCanvas.value);
    initBackground(app);
});
</script>

<style lang="scss" scoped>
canvas {
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(175% 130% at 50% -20%, #000114 0%, #032467 85%, #494268 100%);
}
</style>
