/// <reference path="../references.d.ts" />
import { BlurViewBase } from './blurview.common';
export declare class BlurView extends BlurViewBase {
    nativeView: VisualEffectView;
    constructor();
    readonly ios: VisualEffectView;
    createNativeView(): VisualEffectView;
}
