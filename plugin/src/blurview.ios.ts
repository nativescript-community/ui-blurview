/// <reference path="../references.d.ts" />
import { BlurViewBase, blurRadiusProperty } from './blurview.common';

// export const blurThemeProperty = new Property<BlurView, number>({
//     name: 'blurTheme',
//     defaultValue: 1,
//     valueConverter: v => parseInt(v)
// });
export class BlurView extends BlurViewBase {
    nativeView: VisualEffectView;

    constructor() {
        super();
    }

    get ios(): VisualEffectView {
        return this.nativeView;
    }

    public createNativeView() {
        let result = VisualEffectView.new();
        // result.effect = UIBlurEffect.effectWithStyle(this.theme);
        console.log('create blur view', this.blurRadius);
        if (this.blurRadius !== undefined) {
            result.blurRadius = this.blurRadius;
            // result.effect.setValueForKeyPath(this.blurRadius, 'effectSettings.blurRadius');
        }
        return result;
    }
    // [blurThemeProperty.setNative](value: number) {
    //     this.theme = value;
    //     console.log('blurThemeProperty.setNative', this.blurRadius, this.theme);
    //     if (this.nativeView) {
    //         (this.nativeView as UIVisualEffectView).effect = UIBlurEffect.effectWithStyle(this.theme);
    //         if (this.blurRadius !== undefined) {
    //             (this.nativeView as UIVisualEffectView).effect.setValueForKeyPath(this.blurRadius, 'effectSettings.blurRadius');
    //         }
    //     }
    // }
    [blurRadiusProperty.setNative](value: number) {
        this.blurRadius = value;
        if (this.nativeView) {
            (this.nativeView as VisualEffectView).blurRadius = value;
        }
    }
}

// blurThemeProperty.register(BlurView);
