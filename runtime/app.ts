import {Component} from '@angular/core';
import {Style} from '../index';
import {Styler} from "./styler";
import {CardComponent} from './components/card';
import {PanelComponent} from './components/panel';


@Style({
    ".container": {
        padding: "10px",
        margin: "30px",
    }
})
@Component({
    selector: 'test-app',
    template: `
    <div class="container">
        <card> </card>
        <card> </card>
        <panel></panel>
    </div>`,
    directives: [CardComponent, PanelComponent]
})
export class AppComponent {
    constructor() {
    }
}
