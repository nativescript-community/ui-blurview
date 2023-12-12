import Vue from 'nativescript-vue';
import Basic from './Basic.vue';

import { BlurView } from '@nativescript-community/ui-blurview';

export function installPlugin() {
    Vue.registerElement('BlurView', () => BlurView);
}

export const demos = [{ name: 'Basic', path: 'Basic', component: Basic }];
