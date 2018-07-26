import { View, Property } from 'tns-core-modules/ui/core/view';


export class BlurViewBase extends View {
    constructor() {
        super();
    }
    public blurRadius: number;
}
export const blurRadiusProperty = new Property<BlurViewBase, number>({
    name: 'blurRadius',
    defaultValue: 16,
    valueConverter: v => parseFloat(v)
});
blurRadiusProperty.register(BlurViewBase);
