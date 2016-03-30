import {Component} from 'angular2/core';
import {NgGeneric} from '../components';


@Component({
    selector: 'test-app',
    template: '<div ng-generic>teeest</div>',
    directives: [NgGeneric]
})
export class AppComponent {
    constructor() {
    }
}
