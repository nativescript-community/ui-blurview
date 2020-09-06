import { View } from '@nativescript/core/ui/core/view';
import { Property } from '@nativescript/core/ui/core/properties';
import { Color } from '@nativescript/core/color';

export class BlurViewBase extends View {
    constructor() {
        super();
    }
    public blurRadius: number;
    public scale: number;
    public colorTintAlpha: number;
    public colorTint: Color;
}
export const blurRadiusProperty = new Property<BlurViewBase, number>({
    name: 'blurRadius',
    defaultValue: 16,
    valueConverter: (v) => parseFloat(v),
});
blurRadiusProperty.register(BlurViewBase);
export const scaleProperty = new Property<BlurViewBase, number>({
    name: 'scale',
    defaultValue: 1,
    valueConverter: (v) => parseFloat(v),
});
scaleProperty.register(BlurViewBase);
export const colorTintAlphaProperty = new Property<BlurViewBase, number>({
    name: 'colorTintAlpha',
    defaultValue: 1,
    valueConverter: (v) => parseFloat(v),
});
colorTintAlphaProperty.register(BlurViewBase);
export const colorTintProperty = new Property<BlurViewBase, Color>({
    name: 'colorTint',
    valueConverter: (v) => new Color(v),
});
colorTintProperty.register(BlurViewBase);
