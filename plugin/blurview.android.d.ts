import { BlurViewBase } from './blurview.common';
declare global {
    namespace eightbitlab {
        namespace com {
            namespace blurview {
                class BlurView extends android.widget.FrameLayout {
                    setupWith(rootView: any): this;
                    windowBackground(background: any): this;
                    blurAlgorithm(algo: any): this;
                    blurRadius(radius: any): this;
                    setHasFixedTransformationMatrix(value: any): this;
                }
                class RenderScriptBlur {
                    constructor(context: any);
                }
            }
        }
    }
}
export declare class BlurView extends BlurViewBase {
    nativeViewProtected: eightbitlab.com.blurview.BlurView;
    constructor();
    createNativeView(): eightbitlab.com.blurview.BlurView;
}
