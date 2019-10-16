import { BlurViewBase, blurRadiusProperty } from './blurview.common';

export class BlurView extends BlurViewBase {
    nativeViewProtected: eightbitlab.com.blurview.BlurView;
    constructor() {
        super();
    }

    public createNativeView() {
        const blurView = new eightbitlab.com.blurview.BlurView(this._context);
        // ViewGroup you want to start blur from. Choose root as close to BlurView in hierarchy as possible.
        // set background, if your root layout doesn't have one

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
                (this.nativeView as eightbitlab.com.blurview.BlurView).setBlurEnabled(false);
            } else {
                (this.nativeView as eightbitlab.com.blurview.BlurView).setBlurRadius(Math.min(this.blurRadius / 3, 25)).setBlurEnabled(true);
            }
        }
    }
}
