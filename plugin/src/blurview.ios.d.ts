/// <reference path="../references.d.ts" />
import * as common from './blurview.common';
export declare class BlurView extends common.BlurView {
    nativeView: UIVisualEffectView;
    constructor();
    theme: UIBlurEffectStyle;
    readonly ios: UIVisualEffectView;
    createNativeView(): UIVisualEffectView;
}
