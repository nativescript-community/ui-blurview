import { View, Property, Color } from 'tns-core-modules/ui/core/view';
export declare class BlurViewBase extends View {
    constructor();
    blurRadius: number;
    scale: number;
    colorTintAlpha: number;
    colorTint: Color;
}
export declare const blurRadiusProperty: Property<BlurViewBase, number>;
export declare const scaleProperty: Property<BlurViewBase, number>;
export declare const colorTintAlphaProperty: Property<BlurViewBase, number>;
export declare const colorTintProperty: Property<BlurViewBase, Color>;
