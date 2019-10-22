import { BlurViewBase, blurRadiusProperty } from './blurview.common';

export class BlurView extends BlurViewBase {
    nativeViewProtected: eightbitlab.com.blurview.BlurView;
    // nativeViewProtected: no.danielzeller.blurbehindlib.BlurBehindLayout;
    constructor() {
        super();
    }

    public createNativeView() {
        const blurView = new eightbitlab.com.blurview.BlurView(this._context);
    //     const useTextureView = false;
    //     const blurTextureScale = 0.1;
    //     const paddingVertical = 0;
    //     const blurView = new no.danielzeller.blurbehindlib.BlurBehindLayout(this._context, useTextureView, blurTextureScale, paddingVertical);
    //     blurView.setUpdateMode(no.danielzeller.blurbehindlib.UpdateMode.CONTINUOUSLY);
    //     blurView.setUseChildAlphaAsMask(false);
    //     const decorView = this.page.nativeViewProtected;
    //     const rootView = decorView.getRootView();
    // console.log('createNativeView', rootView);
    //     blurView.setViewBehind(rootView);
        return blurView;
    }
    initBlur() {
        const decorView = this.page.nativeViewProtected;
        // const rootView = decorView.getRootView();
        const windowBackground = decorView.getBackground();
        // console.log('BlurView', 'initBlur', windowBackground, this.nativeViewProtected.getMeasuredWidth(), this.nativeViewProtected.getMeasuredHeight());
        this.nativeViewProtected
            .setupWith(decorView)
            // .setFrameClearDrawable(windowBackground)
            .setBlurAlgorithm(new com.eightbitlab.supportrenderscriptblur.SupportRenderScriptBlur(this._context));
        // .setHasFixedTransformationMatrix(true);

        if (this.blurRadius === 0) {
            (this.nativeView as eightbitlab.com.blurview.BlurView).setBlurEnabled(false);
        } else {
            (this.nativeView as eightbitlab.com.blurview.BlurView).setBlurRadius(this.blurRadius / 3).setBlurEnabled(true);
        }
    }

    initNativeView() {
        const layoutChangeListener = new android.view.View.OnLayoutChangeListener({
            onLayoutChange: (v: android.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number) => {
                this.nativeViewProtected.removeOnLayoutChangeListener(layoutChangeListener);
                this.initBlur();
            }
        });
        this.nativeViewProtected.addOnLayoutChangeListener(layoutChangeListener);
    }

    [blurRadiusProperty.setNative](value: number) {
        if (this.nativeView) {
            if (value === 0) {
                this.nativeViewProtected.setBlurEnabled(false);
            } else {
                this.nativeViewProtected.setBlurRadius(Math.min(this.blurRadius / 3, 24)).setBlurEnabled(true);
            }
        }
    }
}
