/// <reference path="../references.d.ts" />
import * as common from './blurview.common';
export declare class BlurView extends common.BlurView {
    nativeView: UIImageView;
    constructor();
    theme: UIBlurEffectStyle;
    readonly ios: UIImageView;
    createNativeView(): UIVisualEffectView;
    initNativeView(): void;
}
