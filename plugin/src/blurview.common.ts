import { View, Property } from 'tns-core-modules/ui/core/view';

export const blurRadiusProperty = new Property<BlurView, number>({
    name: 'bluRadius',
    valueConverter: v => parseFloat(v)
});
export class BlurView extends View {
    constructor() {
        super();
    }
    public blurRadius: number = 16;
    [blurRadiusProperty.getDefault](): number {
        return this.blurRadius;
    }
}
blurRadiusProperty.register(BlurView);
