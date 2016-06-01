import {Component} from '@angular/core';
import {NgGeneric} from '../index';


@Component({
    selector: 'test-app',
    template: '<div ng-generic>teeest</div>',
    directives: [NgGeneric]
})
export class AppComponent {
    constructor() {
    }
}
