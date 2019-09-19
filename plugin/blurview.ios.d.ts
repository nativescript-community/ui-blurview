import { BlurViewBase } from './blurview.common';
export declare class BlurView extends BlurViewBase {
    nativeView: VisualEffectView;
    blurEffect: UIBlurEffect;
    constructor();
    createNativeView(): UIVisualEffectView;
}
