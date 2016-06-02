# Angular2 Component Styler

This is an experimental new decorator created outside the Angular 2 ecosystem that is used to generate dynamic runtime styles out of plain objects. 

# Usage:

You can create parametrized, dynamic and LESS/SCSS styles directly in your component definition. As you can see in the example below the styles can be parametrized directly in your typescript file. For a more complex example checkout the runtime folder example from the repo github.

example:
```typescript

var backgroundColor = "#FFFFFF",
    lightGray = "#EDEDED",
    padding = "10px";

@Style({
    ".card": {
        display: 'inline-block',
        width: '40%',
        margin: '30px',
        textTransform: 'uppercase',
        boxShadow: '0px 0px 2px rgba(0,0,0,0.6)',

        " .header": {
            display: 'block',
            backgroundColor: backgroundColor,
            padding: '10px',
            color: lightGray
        },

        " .content": {
            display: 'block',
            padding: padding
        },

        " .footer": {
            display: 'block',
            borderTop: '1px solid #808080'
        }
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
    }
}


```


# How it works

Since @Style decorator is defined above @Component decorator and the metadata is stored from bottom to the top, the @Style decorator execution will override styles properties (if any) defined in the  component. 
The styler is working simillar with LESS/SCSS preprocessors (where it was inspired from) thus, the definitions can be nested and the output will be fully CSS compatible.

```
".card": {
        display: 'inline-block',
        backgroundColor: '#FF0000',
        
        " .header": {
            display: 'block'
        }
}

//will output
.card { display: inline-block; background-color: #FF0000;}
.card .header { display: block; }
```

## Advantages
 - No CSS preprocessor needed
 - No bunlder required
 - Take full advantage of Angular2 View Encapsulation
 - Can be parametrized at runtime
 - Styles are defined on location
 - Syntax similar to LESS/SCSS
 
## Disadvantages
 - @Style is not an Angular native decorator
 - @Style decorator must ALWAYS be defined above @Component decorator
 
# Give it a go
Command line
```
npm install --save-dev ng2-styler
```

If you are using angular-cli:
 - update **angular-cli-build.js** and add another line to *vendorNpmFiles*: 'ng2-styler/**/*.+(js|js.map)',
 - update src/system-config.ts with: ```'ng2-styler': 'vendor/ng2-styler'``` in **System.config** *map* property and add **'ng2-styler',** in the barrels
 
 
If you are in a hurry you can checkout this repo and run:
```
npm install
typings install
npm run all

```
# Roadmap
 - add helper functions for color manipulations (darken, lighten etc.)
 - better fetching of Reflect object
 - ideas?