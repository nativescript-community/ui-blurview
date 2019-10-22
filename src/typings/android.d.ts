
declare module eightbitlab {
	export module com {
		export module blurview {
			export class BlockingBlurController extends java.lang.Object implements eightbitlab.com.blurview.BlurController {
				public static class: java.lang.Class<eightbitlab.com.blurview.BlockingBlurController>;
				public setBlurAlgorithm(param0: eightbitlab.com.blurview.BlurAlgorithm): eightbitlab.com.blurview.BlurViewFacade;
				public destroy(): void;
				public setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setHasFixedTransformationMatrix(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): eightbitlab.com.blurview.BlurViewFacade;
				public draw(param0: globalAndroid.graphics.Canvas): boolean;
				public updateBlurViewSize(): void;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class BlurAlgorithm extends java.lang.Object {
				public static class: java.lang.Class<eightbitlab.com.blurview.BlurAlgorithm>;
				/**
				 * Constructs a new instance of the eightbitlab.com.blurview.BlurAlgorithm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
					destroy(): void;
					canModifyBitmap(): boolean;
					getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
				});
				public constructor();
				public destroy(): void;
				public getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
				public blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
				public canModifyBitmap(): boolean;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class BlurController extends java.lang.Object implements eightbitlab.com.blurview.BlurViewFacade {
				public static class: java.lang.Class<eightbitlab.com.blurview.BlurController>;
				/**
				 * Constructs a new instance of the eightbitlab.com.blurview.BlurController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					draw(param0: globalAndroid.graphics.Canvas): boolean;
					updateBlurViewSize(): void;
					destroy(): void;
					setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
					setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
					setHasFixedTransformationMatrix(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
					setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): eightbitlab.com.blurview.BlurViewFacade;
					setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
					setBlurAlgorithm(param0: eightbitlab.com.blurview.BlurAlgorithm): eightbitlab.com.blurview.BlurViewFacade;
					setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				});
				public constructor();
				public static DEFAULT_BLUR_RADIUS: number;
				public static DEFAULT_SCALE_FACTOR: number;
				public setBlurAlgorithm(param0: eightbitlab.com.blurview.BlurAlgorithm): eightbitlab.com.blurview.BlurViewFacade;
				public destroy(): void;
				public setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setHasFixedTransformationMatrix(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): eightbitlab.com.blurview.BlurViewFacade;
				public draw(param0: globalAndroid.graphics.Canvas): boolean;
				public updateBlurViewSize(): void;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class BlurView extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<eightbitlab.com.blurview.BlurView>;
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
				public addView(param0: globalAndroid.view.View, param1: number): void;
				/** @deprecated */
				public invalidateChildInParent(param0: native.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
				public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public isTextDirectionResolved(): boolean;
				public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onDetachedFromWindow(): void;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
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
				public setupWith(param0: globalAndroid.view.ViewGroup): eightbitlab.com.blurview.BlurViewFacade;
				public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
				public setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public focusSearch(param0: number): globalAndroid.view.View;
				public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
				public requestLayout(): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public bringChildToFront(param0: globalAndroid.view.View): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public focusableViewAvailable(param0: globalAndroid.view.View): void;
				public canResolveLayoutDirection(): boolean;
				public addView(param0: globalAndroid.view.View): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class BlurViewFacade extends java.lang.Object {
				public static class: java.lang.Class<eightbitlab.com.blurview.BlurViewFacade>;
				/**
				 * Constructs a new instance of the eightbitlab.com.blurview.BlurViewFacade interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
					setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
					setHasFixedTransformationMatrix(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
					setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): eightbitlab.com.blurview.BlurViewFacade;
					setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
					setBlurAlgorithm(param0: eightbitlab.com.blurview.BlurAlgorithm): eightbitlab.com.blurview.BlurViewFacade;
					setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				});
				public constructor();
				public setBlurAlgorithm(param0: eightbitlab.com.blurview.BlurAlgorithm): eightbitlab.com.blurview.BlurViewFacade;
				public setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setHasFixedTransformationMatrix(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): eightbitlab.com.blurview.BlurViewFacade;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<eightbitlab.com.blurview.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class NoOpBlurAlgorithm extends java.lang.Object implements eightbitlab.com.blurview.BlurAlgorithm {
				public static class: java.lang.Class<eightbitlab.com.blurview.NoOpBlurAlgorithm>;
				public destroy(): void;
				public getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
				public blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
				public canModifyBitmap(): boolean;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class NoOpController extends java.lang.Object implements eightbitlab.com.blurview.BlurController {
				public static class: java.lang.Class<eightbitlab.com.blurview.NoOpController>;
				public setBlurAlgorithm(param0: eightbitlab.com.blurview.BlurAlgorithm): eightbitlab.com.blurview.BlurViewFacade;
				public destroy(): void;
				public setOverlayColor(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurRadius(param0: number): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurAutoUpdate(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setBlurEnabled(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setHasFixedTransformationMatrix(param0: boolean): eightbitlab.com.blurview.BlurViewFacade;
				public setFrameClearDrawable(param0: globalAndroid.graphics.drawable.Drawable): eightbitlab.com.blurview.BlurViewFacade;
				public draw(param0: globalAndroid.graphics.Canvas): boolean;
				public updateBlurViewSize(): void;
			}
		}
	}
}

declare module eightbitlab {
	export module com {
		export module blurview {
			export class RenderScriptBlur extends java.lang.Object implements eightbitlab.com.blurview.BlurAlgorithm {
				public static class: java.lang.Class<eightbitlab.com.blurview.RenderScriptBlur>;
				public destroy(): void;
				public constructor(param0: globalAndroid.content.Context);
				public getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
				public blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
				public canModifyBitmap(): boolean;
			}
		}
	}
}

declare module com {
	export module eightbitlab {
		export module supportrenderscriptblur {
			export class SupportRenderScriptBlur extends java.lang.Object implements eightbitlab.com.blurview.BlurAlgorithm {
				public static class: java.lang.Class<com.eightbitlab.supportrenderscriptblur.SupportRenderScriptBlur>;
				public destroy(): void;
				public constructor(param0: globalAndroid.content.Context);
				public getSupportedBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
				public blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
				public canModifyBitmap(): boolean;
			}
		}
	}
}


declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export class BlurBehindLayout extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<no.danielzeller.blurbehindlib.BlurBehindLayout>;
				public childDrawableStateChanged(param0: globalAndroid.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				/** @deprecated */
				public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
				public setBlurRadius(param0: number): void;
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
				public disable(): void;
				public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public requestFitSystemWindows(): void;
				public getUpdateMode(): no.danielzeller.blurbehindlib.UpdateMode;
				public getTextDirection(): number;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public getBlurRadius(): number;
				public requestTransparentRegion(param0: globalAndroid.view.View): void;
				public constructor(param0: globalAndroid.content.Context, param1: boolean);
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
				public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: number, param3: number);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getTextAlignment(): number;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
				public addView(param0: globalAndroid.view.View, param1: number): void;
				/** @deprecated */
				public invalidateChildInParent(param0: native.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
				public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public isTextDirectionResolved(): boolean;
				public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onDetachedFromWindow(): void;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
				public getViewBehind(): globalAndroid.view.View;
				public recomputeViewAttributes(param0: globalAndroid.view.View): void;
				public isLayoutDirectionResolved(): boolean;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public updateForMilliSeconds(param0: number): void;
				public isTextAlignmentResolved(): boolean;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public getLayoutDirection(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public removeView(param0: globalAndroid.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
				public enable(): void;
				public focusSearch(param0: number): globalAndroid.view.View;
				public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
				public requestLayout(): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public setViewBehind(param0: globalAndroid.view.View): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public bringChildToFront(param0: globalAndroid.view.View): void;
				public setUseChildAlphaAsMask(param0: boolean): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public focusableViewAvailable(param0: globalAndroid.view.View): void;
				public canResolveLayoutDirection(): boolean;
				public addView(param0: globalAndroid.view.View): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public getUseChildAlphaAsMask(): boolean;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public setUpdateMode(param0: no.danielzeller.blurbehindlib.UpdateMode): void;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<no.danielzeller.blurbehindlib.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export class ScreenRectUtil extends java.lang.Object {
				public static class: java.lang.Class<no.danielzeller.blurbehindlib.ScreenRectUtil>;
				public static Companion: no.danielzeller.blurbehindlib.ScreenRectUtil.Companion;
				public constructor();
			}
			export module ScreenRectUtil {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.ScreenRectUtil.Companion>;
					public getScreenRect(param0: globalAndroid.view.View): globalAndroid.graphics.Rect;
				}
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export class UpdateMode {
				public static class: java.lang.Class<no.danielzeller.blurbehindlib.UpdateMode>;
				public static CONTINUOUSLY: no.danielzeller.blurbehindlib.UpdateMode;
				public static ON_SCROLL: no.danielzeller.blurbehindlib.UpdateMode;
				public static MANUALLY: no.danielzeller.blurbehindlib.UpdateMode;
				public constructor(param0: string, param1: number);
				public static values(): native.Array<no.danielzeller.blurbehindlib.UpdateMode>;
				public static valueOf(param0: string): no.danielzeller.blurbehindlib.UpdateMode;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export module opengl {
				export class RenderTexture extends java.lang.Object {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.opengl.RenderTexture>;
					public setFboTex$blurbehindlib_release(param0: number): void;
					public constructor();
					public initiateFrameBuffer(param0: number, param1: number): number;
					public deleteAllTextures(): void;
					public unbindRenderTexture(): void;
					public getFboTex$blurbehindlib_release(): number;
					public bindRenderTexture(): void;
				}
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export module opengl {
				export class ShaderHelper extends java.lang.Object {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.opengl.ShaderHelper>;
					public static INSTANCE: no.danielzeller.blurbehindlib.opengl.ShaderHelper;
					public buildProgram(param0: string, param1: string): number;
				}
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export module opengl {
				export abstract class ShaderProgram extends java.lang.Object {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.opengl.ShaderProgram>;
					public static U_MATRIX: string;
					public static U_TEXTURE_UNIT: string;
					public static A_POSITION: string;
					public static A_TEXTURE_COORDINATES: string;
					public static A_CUTOFF_LOCATION: string;
					public static Companion: no.danielzeller.blurbehindlib.opengl.ShaderProgram.Companion;
					public useProgram(): void;
					public setPositionAttributeLocation(param0: number): void;
					public load(param0: globalAndroid.content.Context): void;
					public getPositionAttributeLocation(): number;
					public getTextureCoordinatesAttributeLocation(): number;
					public setProgram(param0: number): void;
					public getProgram(): number;
					public setTextureCoordinatesAttributeLocation(param0: number): void;
					public constructor(param0: number, param1: number);
				}
				export module ShaderProgram {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<no.danielzeller.blurbehindlib.opengl.ShaderProgram.Companion>;
					}
				}
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export module opengl {
				export class SpriteMesh extends java.lang.Object {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.opengl.SpriteMesh>;
					public static Companion: no.danielzeller.blurbehindlib.opengl.SpriteMesh.Companion;
					public constructor();
					public bindData(param0: no.danielzeller.blurbehindlib.opengl.ShaderProgram): void;
					public draw(): void;
				}
				export module SpriteMesh {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<no.danielzeller.blurbehindlib.opengl.SpriteMesh.Companion>;
						public getVERTEX_DATA(): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export module opengl {
				export class TextResourceReader extends java.lang.Object {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.opengl.TextResourceReader>;
					public static INSTANCE: no.danielzeller.blurbehindlib.opengl.TextResourceReader;
					public readTextFileFromResource(param0: globalAndroid.content.Context, param1: number): string;
				}
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export module opengl {
				export class TextureShaderProgram extends no.danielzeller.blurbehindlib.opengl.ShaderProgram {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.opengl.TextureShaderProgram>;
					public load(param0: globalAndroid.content.Context): void;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export module opengl {
				export class VertexArray extends java.lang.Object {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.opengl.VertexArray>;
					public constructor(param0: native.Array<number>);
					public setVertexAttribPointer(param0: number, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export module opengl {
				export class VertexArrayKt extends java.lang.Object {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.opengl.VertexArrayKt>;
				}
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export module opengl {
				export class ViewSurfaceTexture extends java.lang.Object {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.opengl.ViewSurfaceTexture>;
					public constructor();
					public updateTexture(): void;
					public getTextureID(): number;
					public createSurface(param0: number, param1: number): void;
					public releaseSurface(): void;
					public endDraw(param0: globalAndroid.graphics.Canvas): void;
					public beginDraw(): globalAndroid.graphics.Canvas;
				}
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export module renderers {
				export class CommonRenderer extends java.lang.Object {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.renderers.CommonRenderer>;
					public setBehindViewSurfaceTexture(param0: no.danielzeller.blurbehindlib.opengl.ViewSurfaceTexture): void;
					public onDrawFrame$blurbehindlib_release(): void;
					public setUseChildAlphaAsMask(param0: boolean): void;
					public onSurfaceChanged(param0: number, param1: number): void;
					public onSurfaceCreated(): void;
					public destroyResources(): void;
					public getBehindViewSurfaceTexture(): no.danielzeller.blurbehindlib.opengl.ViewSurfaceTexture;
					public getBlurRadius(): number;
					public setBlurRadius(param0: number): void;
					public setChildViewSurfaceTexture(param0: no.danielzeller.blurbehindlib.opengl.ViewSurfaceTexture): void;
					public getUseChildAlphaAsMask(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: boolean, param3: number);
					public getChildViewSurfaceTexture(): no.danielzeller.blurbehindlib.opengl.ViewSurfaceTexture;
					public isCreated(): boolean;
					public setCreated(param0: boolean): void;
					public getScale$blurbehindlib_release(): number;
				}
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export module renderers {
				export class GLSurfaceViewRenderer extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.Renderer {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.renderers.GLSurfaceViewRenderer>;
					public commonRenderer: no.danielzeller.blurbehindlib.renderers.CommonRenderer;
					public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
					public constructor();
					public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
					public setCommonRenderer(param0: no.danielzeller.blurbehindlib.renderers.CommonRenderer): void;
					public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
					public getCommonRenderer(): no.danielzeller.blurbehindlib.renderers.CommonRenderer;
				}
			}
		}
	}
}

declare module no {
	export module danielzeller {
		export module blurbehindlib {
			export module renderers {
				export class TextureViewRenderer extends java.lang.Object implements globalAndroid.view.TextureView.SurfaceTextureListener {
					public static class: java.lang.Class<no.danielzeller.blurbehindlib.renderers.TextureViewRenderer>;
					public commonRenderer: no.danielzeller.blurbehindlib.renderers.CommonRenderer;
					public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
					public constructor(param0: globalAndroid.content.Context);
					public update(): void;
					public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
					public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
					public getContext(): globalAndroid.content.Context;
					public setCommonRenderer(param0: no.danielzeller.blurbehindlib.renderers.CommonRenderer): void;
					public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
					public getCommonRenderer(): no.danielzeller.blurbehindlib.renderers.CommonRenderer;
				}
				export module TextureViewRenderer {
					export class TextureViewRenderThread extends java.lang.Thread {
						public static class: java.lang.Class<no.danielzeller.blurbehindlib.renderers.TextureViewRenderer.TextureViewRenderThread>;
						public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string);
						public getUpdate(): boolean;
						public constructor();
						public isStopped(): boolean;
						public setUpdate(param0: boolean): void;
						public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable);
						public constructor(param0: java.lang.Runnable);
						public constructor(param0: java.lang.Runnable, param1: string);
						public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string, param3: number);
						public setStopped(param0: boolean): void;
						public run(): void;
						public constructor(param0: java.lang.ThreadGroup, param1: string);
						public constructor(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}