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
    nativeView: UIImageView;
    // private _imageSourceAffectsLayout: boolean = true;
    // private _templateImageWasCreated: boolean;

    constructor() {
        super();
    }

    theme = UIBlurEffectStyle.Dark;

    get ios(): UIImageView {
        return this.nativeView;
    }
    // isLoading: boolean;
    // public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
    //     const nativeView = this.nativeView;
    //     if (nativeView) {
    //         const width = layout.getMeasureSpecSize(widthMeasureSpec);
    //         const height = layout.getMeasureSpecSize(heightMeasureSpec);
    //         this.setMeasuredDimension(width, height);
    //     }
    // }

    public createNativeView() {
        let result = UIVisualEffectView.new();
        result.effect = UIBlurEffect.effectWithStyle(this.theme);
        return result;
    }
    public initNativeView() {
        super.initNativeView();
    }
}
