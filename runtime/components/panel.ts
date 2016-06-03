import {Component} from '@angular/core';
import {Style} from '../../index';
import {Styler} from "../styler";
import {Type} from '@angular/core';


@Style({
    ".panel": {
        display: 'block',
        margin: Styler.layoutMargin,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.6)',
        ".body": {
            display: "block",
            padding: Styler.compact ? "50px" : "20px",
            fontSize: Styler.compact ? "25px" : "15px"
        },
        ".footer": Styler.footerDefinition
    }
})
@Component({
    selector: 'panel',
    template: `
        <div class="panel">
           <span class="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                 qui officia deserunt mollit anim id est laborum.
           </span>
           <span class="footer">
                <span class="action left">close</span>
                <span class="action">save</span>

           </span>
        </div>`,

})
export class PanelComponent extends Type {
    constructor() {
    }
}
