import { View, Property } from 'tns-core-modules/ui/core/view';

export const blurRadiusProperty = new Property<BlurView, number>({
    name: 'blurRadius',
    defaultValue: 16,
    valueConverter: v => parseFloat(v)
});
export class BlurView extends View {
    constructor() {
        super();
    }
    public blurRadius: number;
}
blurRadiusProperty.register(BlurView);
