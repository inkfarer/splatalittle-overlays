import './styles/graphics-common.scss';

import { gsap } from 'gsap';
import PixiPlugin from 'gsap/PixiPlugin';
import { createApp } from 'vue';
import { installCommonHelpers } from './helpers/installCommonHelpers';
import Background from './pages/background/Background.vue';
import * as PIXI from './helpers/pixi';

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

(async () => {
    const app = createApp(Background);
    installCommonHelpers(app);
    app.mount('#app');
})();
