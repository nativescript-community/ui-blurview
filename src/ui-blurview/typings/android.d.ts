/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

/// <reference path="android-declarations.d.ts"/>

declare namespace eightbitlab {
    export namespace com {
        export namespace blurview {
            export class BlurAlgorithm extends java.lang.Object {
                public static class: java.lang.Class<blurview.BlurAlgorithm>;
                /**
                 * Constructs a new instance of the eightbitlab.com.blurview.BlurAlgorithm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
                    destroy(): void;
                    canModifyBitmap(): boolean;
                    getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
                    scaleFactor(): number;
                    render(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Bitmap): void;
                });
                public constructor();
                public destroy(): void;
                public scaleFactor(): number;
                public getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
                public render(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Bitmap): void;
                public blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
                public canModifyBitmap(): boolean;
            }
        }
    }
}

declare namespace eightbitlab {
    export namespace com {
        export namespace blurview {
            export class BlurController extends java.lang.Object implements BlurViewFacade {
                public static class: java.lang.Class<blurview.BlurController>;
                /**
                 * Constructs a new instance of the eightbitlab.com.blurview.BlurController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    draw(param0: globalAndroid.graphics.Canvas): boolean;
                    updateBlurViewSize(): void;
                    destroy(): void;
                    setBlurEnabled(param0: boolean): BlurViewFacade;
                    setBlurAutoUpdate(param0: boolean): BlurViewFacade;
                    setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): BlurViewFacade;
                    setBlurRadius(param0: number): BlurViewFacade;
                    setOverlayColor(param0: number): BlurViewFacade;
                });
                public constructor();
                public static DEFAULT_BLUR_RADIUS: number = 16.0;
                public static DEFAULT_SCALE_FACTOR: number = 6.0;
                public destroy(): void;
                public setOverlayColor(param0: number): BlurViewFacade;
                public setBlurRadius(param0: number): BlurViewFacade;
                public setBlurAutoUpdate(param0: boolean): BlurViewFacade;
                public setBlurEnabled(param0: boolean): BlurViewFacade;
                public setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): BlurViewFacade;
                public draw(param0: globalAndroid.graphics.Canvas): boolean;
                public updateBlurViewSize(): void;
            }
        }
    }
}

declare namespace eightbitlab {
    export namespace com {
        export namespace blurview {
            export class BlurView extends globalAndroid.widget.FrameLayout {
                public static class: java.lang.Class<blurview.BlurView>;
                public childDrawableStateChanged(param0: globalAndroid.view.View): void;
                public requestDisallowInterceptTouchEvent(param0: boolean): void;
                /** @deprecated */
                public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
                public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
                public clearChildFocus(param0: globalAndroid.view.View): void;
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
                public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
                public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                public isLayoutRequested(): boolean;
                public sendAccessibilityEvent(param0: number): void;
                public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
                public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public requestFitSystemWindows(): void;
                public getTextDirection(): number;
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                public requestTransparentRegion(param0: globalAndroid.view.View): void;
                public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
                public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
                public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public getTextAlignment(): number;
                public getParentForAccessibility(): globalAndroid.view.ViewParent;
                public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
                public findOnBackInvokedDispatcherForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.View): globalAndroid.window.OnBackInvokedDispatcher;
                public addView(param0: globalAndroid.view.View, param1: number): void;
                public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
                public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
                public isTextDirectionResolved(): boolean;
                public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
                public onDetachedFromWindow(): void;
                public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
                public setupWith(param0: globalAndroid.view.ViewGroup, param1: BlurAlgorithm): BlurViewFacade;
                public recomputeViewAttributes(param0: globalAndroid.view.View): void;
                public isLayoutDirectionResolved(): boolean;
                public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
                public isTextAlignmentResolved(): boolean;
                public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
                public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
                public getLayoutDirection(): number;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                public removeView(param0: globalAndroid.view.View): void;
                public canResolveTextDirection(): boolean;
                public canResolveTextAlignment(): boolean;
                public draw(param0: globalAndroid.graphics.Canvas): void;
                public setupWith(param0: globalAndroid.view.ViewGroup): BlurViewFacade;
                public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: androidNative.Array<number>): void;
                public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
                public setBlurRadius(param0: number): BlurViewFacade;
                public focusSearch(param0: number): globalAndroid.view.View;
                public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
                public requestLayout(): void;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context);
                /** @deprecated */
                public requestFitSystemWindows(): void;
                public bringChildToFront(param0: globalAndroid.view.View): void;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public setOverlayColor(param0: number): BlurViewFacade;
                public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
                public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
                public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
                public focusableViewAvailable(param0: globalAndroid.view.View): void;
                public canResolveLayoutDirection(): boolean;
                public addView(param0: globalAndroid.view.View): void;
                public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
                public setBlurAutoUpdate(param0: boolean): BlurViewFacade;
                public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
                public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                public setBlurEnabled(param0: boolean): BlurViewFacade;
                public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                public onStopNestedScroll(param0: globalAndroid.view.View): void;
                public onAttachedToWindow(): void;
                /** @deprecated */
                public invalidateChildInParent(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
                public getParent(): globalAndroid.view.ViewParent;
                public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
            }
        }
    }
}

declare namespace eightbitlab {
    export namespace com {
        export namespace blurview {
            export class BlurViewCanvas extends globalAndroid.graphics.Canvas {
                public static class: java.lang.Class<blurview.BlurViewCanvas>;
                public constructor(param0: globalAndroid.graphics.Bitmap);
                public constructor();
            }
        }
    }
}

declare namespace eightbitlab {
    export namespace com {
        export namespace blurview {
            export class BlurViewFacade extends java.lang.Object {
                public static class: java.lang.Class<blurview.BlurViewFacade>;
                /**
                 * Constructs a new instance of the eightbitlab.com.blurview.BlurViewFacade interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    setBlurEnabled(param0: boolean): blurview.BlurViewFacade;
                    setBlurAutoUpdate(param0: boolean): blurview.BlurViewFacade;
                    setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): blurview.BlurViewFacade;
                    setBlurRadius(param0: number): blurview.BlurViewFacade;
                    setOverlayColor(param0: number): blurview.BlurViewFacade;
                });
                public constructor();
                public setOverlayColor(param0: number): blurview.BlurViewFacade;
                public setBlurRadius(param0: number): blurview.BlurViewFacade;
                public setBlurAutoUpdate(param0: boolean): blurview.BlurViewFacade;
                public setBlurEnabled(param0: boolean): blurview.BlurViewFacade;
                public setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): blurview.BlurViewFacade;
            }
        }
    }
}

declare namespace eightbitlab {
    export namespace com {
        export namespace blurview {
            export class BuildConfig extends java.lang.Object {
                public static class: java.lang.Class<blurview.BuildConfig>;
                public static DEBUG: boolean = 0;
                public static LIBRARY_PACKAGE_NAME: string = 'eightbitlab.com.blurview';
                public static BUILD_TYPE: string = 'release';
                public constructor();
            }
        }
    }
}

declare namespace eightbitlab {
    export namespace com {
        export namespace blurview {
            export class NoOpController extends java.lang.Object implements BlurController {
                public static class: java.lang.Class<blurview.NoOpController>;
                public destroy(): void;
                public setOverlayColor(param0: number): BlurViewFacade;
                public setBlurRadius(param0: number): BlurViewFacade;
                public setBlurAutoUpdate(param0: boolean): BlurViewFacade;
                public setBlurEnabled(param0: boolean): BlurViewFacade;
                public setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): BlurViewFacade;
                public draw(param0: globalAndroid.graphics.Canvas): boolean;
                public updateBlurViewSize(): void;
            }
        }
    }
}

declare namespace eightbitlab {
    export namespace com {
        export namespace blurview {
            export class PreDrawBlurController extends java.lang.Object implements BlurController {
                public static class: java.lang.Class<blurview.PreDrawBlurController>;
                public destroy(): void;
                public setOverlayColor(param0: number): BlurViewFacade;
                public setBlurRadius(param0: number): BlurViewFacade;
                public setBlurAutoUpdate(param0: boolean): BlurViewFacade;
                public setBlurEnabled(param0: boolean): BlurViewFacade;
                public setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): BlurViewFacade;
                public draw(param0: globalAndroid.graphics.Canvas): boolean;
                public updateBlurViewSize(): void;
            }
        }
    }
}

declare namespace eightbitlab {
    export namespace com {
        export namespace blurview {
            export class R extends java.lang.Object {
                public static class: java.lang.Class<blurview.R>;
            }
            export namespace R {
                export class attr extends java.lang.Object {
                    public static class: java.lang.Class<blurview.R.attr>;
                    public static blurOverlayColor: number = 0;
                }
                export class styleable extends java.lang.Object {
                    public static class: java.lang.Class<blurview.R.styleable>;
                    public static BlurView: androidNative.Array<number>;
                    public static BlurView_blurOverlayColor: number = 0;
                    public static '<clinit>'(): void;
                }
            }
        }
    }
}

declare namespace eightbitlab {
    export namespace com {
        export namespace blurview {
            export class RenderEffectBlur extends java.lang.Object implements BlurAlgorithm {
                public static class: java.lang.Class<blurview.RenderEffectBlur>;
                public fallbackAlgorithm: BlurAlgorithm;
                public destroy(): void;
                public scaleFactor(): number;
                public getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
                public render(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Bitmap): void;
                public blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
                public constructor();
                public canModifyBitmap(): boolean;
            }
        }
    }
}

declare namespace eightbitlab {
    export namespace com {
        export namespace blurview {
            export class RenderScriptBlur extends java.lang.Object implements BlurAlgorithm {
                public static class: java.lang.Class<blurview.RenderScriptBlur>;
                public destroy(): void;
                public scaleFactor(): number;
                public constructor(param0: globalAndroid.content.Context);
                public getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
                public render(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Bitmap): void;
                public blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
                public canModifyBitmap(): boolean;
            }
        }
    }
}

declare namespace eightbitlab {
    export namespace com {
        export namespace blurview {
            export class SizeScaler extends java.lang.Object {
                public static class: java.lang.Class<blurview.SizeScaler>;
                public constructor(param0: number);
            }
            export namespace SizeScaler {
                export class Size extends java.lang.Object {
                    public static class: java.lang.Class<blurview.SizeScaler.Size>;
                    public equals(param0: any): boolean;
                    public toString(): string;
                    public hashCode(): number;
                }
            }
        }
    }
}

//Generics information:
