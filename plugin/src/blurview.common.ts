import { View, Property } from 'tns-core-modules/ui/core/view';


export const blurRadiusProperty = new Property<BlurView, number>({ name: 'bluRadius' });
export class BlurView extends View {
    constructor() {
        super();
    }
    public blurRadius = 12;
    [blurRadiusProperty.getDefault](): any {
        return this.blurRadius;
    }
}
blurRadiusProperty.register(BlurView);
