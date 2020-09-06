import { Page, Observable, PropertyChangeData, EventData } from '@nativescript/core/ui/page';
import { Slider } from '@nativescript/core/ui/slider';

class Model extends Observable {

    // set blurRadius(value) {
    //     console.log('set blurRadius', value);
    //     this.set('_blurRadius', value);
    // }
    constructor() {
        super();
        this.set('blurRadius', 10);
    }
}

export function pageLoaded(args) {
    const page = args.object;
    page.bindingContext = new Model();
}

// handle value change
export function onSliderLoaded(args) {
    const sliderComponent: Slider = <Slider>args.object;
    sliderComponent.on('valueChange', sargs => {
        const page = (<Slider>sargs.object).page;
        const vm = page.bindingContext as Model;
        vm.set('blurRadius', Math.round((<Slider>sargs.object).value));
    });
}
