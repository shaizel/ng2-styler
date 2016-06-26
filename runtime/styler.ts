export class Styler {

    static extend(from:Object, to:Object) {
        for (var i in to) {
            if (to.hasOwnProperty(i)) {
                from[i] = to[i];
            }
        }
        return from;
    };

    static compact:boolean = window.location.search.indexOf('compact') === -1;

    static colorGray1:string = "#808080";
    static colorGray2:string = "#E0E0E0";
    static colorGray3:string = "#EDEDED";

    static headerBackground:string = Styler.compact ? "#46B6AC" : "#80CCFF";
    static headerColor:string = Styler.compact ? "#FFFFFF" : "#000000";

    static contentPadding:string = Styler.compact ? "20px" : "10px";
    static headerPadding:string = Styler.compact ? "20px" : "5px";
    static layoutMargin:string = "5px";

    static transitions:Object = {
        transition: 'background-color 200ms ease-in-out'
    };

    static buttonDef:Object = Styler.extend({
        textTransform: 'uppercase',
        cursor: 'pointer',
        padding: '10px',
        color: '#3f51b5',
        float: 'right',

        '&.left': {
            float: "left"
        },

        '&:hover': {
            backgroundColor: Styler.colorGray2
        }
    }, Styler.transitions);

    static footerDefinition:Object = {
        display: 'block',
        textAlign: 'right',
        borderTop: "1px solid " + Styler.colorGray2,
        backgroundColor: Styler.colorGray3,
        padding: Styler.contentPadding,
        height: '35px',
        '.action': Styler.buttonDef
    };


}
