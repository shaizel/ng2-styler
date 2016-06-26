import {Component} from '@angular/core';
import {Style} from '../../index';
import {Styler} from "../styler";
import {Type} from '@angular/core';


@Style({
    ".card": {
        display: 'inline-block',
        width: '40%',
        margin: Styler.layoutMargin,
        textTransform: 'uppercase',
        boxShadow: '0px 0px 2px rgba(0,0,0,0.6)',

        ".header": {
            backgroundColor: Styler.headerBackground,
            padding: Styler.headerPadding,
            color: Styler.headerColor
        },

        ".content": {
            padding: Styler.contentPadding
        },

        ".footer": Styler.footerDefinition
    }
})
@Component({
    selector: 'card',
    template: `
        <div class="card">
           <div class="header">
             Update
           </div>
           <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
           </div>
           <span class="footer">
                <span class="action">view profile</span>
           </span>
        </div>`,

})
export class CardComponent extends Type {
    constructor() {
        super();
    }
}
