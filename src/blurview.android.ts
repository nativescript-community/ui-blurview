import { BlurViewBase, blurRadiusProperty } from './blurview.common';


export class BlurView extends BlurViewBase {
    nativeViewProtected: eightbitlab.com.blurview.BlurView;
    constructor() {
        super();
    }

    public createNativeView() {
        const blurView = new eightbitlab.com.blurview.BlurView(this._context);
        const decorView = this._context.getWindow().getDecorView();
        // ViewGroup you want to start blur from. Choose root as close to BlurView in hierarchy as possible.
        const rootView = decorView.getRootView();
        // set background, if your root layout doesn't have one
        const windowBackground = decorView.getBackground();

        blurView
            .setupWith(rootView)
            .setFrameClearDrawable(windowBackground)
            .setBlurAlgorithm(new eightbitlab.com.blurview.RenderScriptBlur(this._context))
            .setHasFixedTransformationMatrix(true);
        return blurView;
    }

    [blurRadiusProperty.setNative](value: number) {
        if (this.nativeView) {
            if (value === 0) {
                (this.nativeView as eightbitlab.com.blurview.BlurView).setBlurEnabled(false);
            } else {
                (this.nativeView as eightbitlab.com.blurview.BlurView).setBlurRadius(this.blurRadius / 3).setBlurEnabled(true);

            }
        }
    }
}
