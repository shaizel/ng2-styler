import {Component} from '@angular/core';
import {Style} from '../../index';
import {Styler} from "../styler";
import {CardComponent} from './card';
import {PanelComponent} from './panel';


@Style({
    ".container": {
        padding: "10px",
        margin: "30px",
    }
})
@Component({
    selector: 'home',
    template: `
    <div class="container">
        <card> </card>
        <card> </card>
        <panel></panel>
    </div>`,
    directives: [CardComponent, PanelComponent]
})
export class HomeComponent {
    constructor() {
    }
}
