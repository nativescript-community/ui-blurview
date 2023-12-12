import { ContentView, LayoutBase, Page, View } from '@nativescript/core';
import { BlurViewBase, blurRadiusProperty } from './index.common';

export class BlurView extends BlurViewBase {
    nativeViewProtected: eightbitlab.com.blurview.BlurView;
    constructor() {
        super();
    }

    public createNativeView() {
        const blurView = new eightbitlab.com.blurview.BlurView(this._context);
        return blurView;
    }
    public _setupUI(context: any, atIndex?: number): void {
        super._setupUI(context, atIndex);
    }
    initBlur(parent) {
        const decorView = parent.nativeViewProtected;
        const view = this.nativeViewProtected;

        // if (android.os.Build.VERSION.SDK_INT < 17) {
        //     view.setupWith(decorView).setBlurAlgorithm(new com.eightbitlab.supportrenderscriptblur.SupportRenderScriptBlur(this._context));
        // } else {
        view.setupWith(decorView, new eightbitlab.com.blurview.RenderScriptBlur(this._context));
        // }
        view.setBlurAutoUpdate(true);
        // .setHasFixedTransformationMatrix(true);
        if (this.blurRadius === 0) {
            view.setBlurEnabled(false);
        } else {
            view.setBlurRadius(Math.min(this.blurRadius / 1, 24)).setBlurEnabled(true);
        }
        view.setClipToOutline(true);
    }

    initNativeView() {
        const layoutChangeListener = new android.view.View.OnLayoutChangeListener({
            onLayoutChange: (v: android.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number) => {
                this.nativeViewProtected.removeOnLayoutChangeListener(layoutChangeListener);
                const parent = this.parent as View;
                if (parent instanceof LayoutBase) {
                    let index = parent.getChildIndex(this);
                    while (index > 0) {
                        const otherChild = parent.getChildAt(index - 1);
                        if (otherChild instanceof LayoutBase) {
                            return this.initBlur(otherChild);
                        }
                        index -= 1;
                    }
                }
                let parentParent = parent.parent;
                while (parentParent) {
                    if (parentParent instanceof LayoutBase) {
                        let index = parentParent.getChildIndex(parent);
                        while (index > 0) {
                            const otherChild = parentParent.getChildAt(index - 1);
                            if (otherChild instanceof ContentView) {
                                return this.initBlur(otherChild.content);
                            }
                            if (otherChild instanceof LayoutBase) {
                                return this.initBlur(otherChild);
                            }
                            index -= 1;
                        }
                    } else if (parentParent instanceof Page) {
                        return this.initBlur(parentParent);
                    }
                    parentParent = parentParent.parent;
                }
                this.initBlur(this.page);
            }
        });
        this.nativeViewProtected.addOnLayoutChangeListener(layoutChangeListener);
    }

    [blurRadiusProperty.setNative](value: number) {
        if (this.nativeView) {
            if (value === 0) {
                this.nativeViewProtected.setBlurEnabled(false);
            } else {
                this.nativeViewProtected.setBlurRadius(Math.min(this.blurRadius / 1, 24)).setBlurEnabled(true);
            }
        }
    }
}
