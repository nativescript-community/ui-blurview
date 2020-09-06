import { BlurViewBase, blurRadiusProperty, colorTintAlphaProperty, colorTintProperty, scaleProperty } from './blurview.common';
import { Color } from '@nativescript/core/color';

export class BlurView extends BlurViewBase {
    nativeView: UIVisualEffectView;
    blurEffect: UIBlurEffect;

    constructor() {
        super();
    }
    public createNativeView() {
        let visualEffectView = UIVisualEffectView.new();
        this.blurEffect = NSClassFromString('_UICustomBlurEffect').new() as UIBlurEffect;
        visualEffectView.effect = this.blurEffect;
        return visualEffectView;
    }
    [blurRadiusProperty.setNative](value: number) {
        if (this.nativeViewProtected) {
            this.blurEffect.setValueForKeyPath(value, 'blurRadius');
            this.nativeViewProtected.effect = this.blurEffect;
        }
    }
    [scaleProperty.setNative](value: number) {
        if (this.nativeViewProtected) {
            this.blurEffect.setValueForKeyPath(value, 'scale');
            this.nativeViewProtected.effect = this.blurEffect;
        }
    }
    [colorTintAlphaProperty.setNative](value: number) {
        if (this.nativeViewProtected) {
            this.blurEffect.setValueForKeyPath(value, 'colorTintAlpha');
            this.nativeViewProtected.effect = this.blurEffect;
        }
    }
    [colorTintProperty.setNative](value: Color) {
        if (this.nativeViewProtected) {
            this.blurEffect.setValueForKeyPath(value ? value.ios : null, 'colorTint');
            this.nativeViewProtected.effect = this.blurEffect;
        }
    }
}
