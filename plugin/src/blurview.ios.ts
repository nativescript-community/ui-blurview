/// <reference path="../references.d.ts" />
import * as common from './blurview.common';
import * as app from 'application';
import * as fs from 'file-system';
import * as utils from 'utils/utils';
import * as types from 'utils/types';
import * as imageSrc from 'image-source';
import { View, layout } from 'ui/core/view';
import { Color } from 'color';
global.moduleMerge(common, exports);

export class BlurView extends common.BlurView {
    nativeView: UIVisualEffectView;

    constructor() {
        super();
    }

    theme = UIBlurEffectStyle.Dark;

    get ios(): UIVisualEffectView {
        return this.nativeView;
    }

    public createNativeView() {
        let result = UIVisualEffectView.new();
        result.effect = UIBlurEffect.effectWithStyle(this.theme);
        result.effect.setValueForKeyPath(this.blurRadius, 'effectSettings.blurRadius');
        return result;
    }
    [common.blurRadiusProperty.setNative](value: number) {
        this.blurRadius = value;
        if (this.nativeView) {
            (this.nativeView as UIVisualEffectView).effect.setValueForKeyPath(value, 'effectSettings.blurRadius');
        }
    }
}
