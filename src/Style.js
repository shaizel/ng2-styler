"use strict";
var core_1 = require('@angular/core');
function Style(value) {
    function toDash(str) {
        return str.replace(/([A-Z])/g, function ($1) {
            return "-" + $1.toLowerCase();
        });
    }
    var __ref__ = window['Reflect'], builtStyles = goInto("", value);
    function goInto(prefix, def) {
        var queue = [];
        var result = (prefix && prefix !== "") ? prefix + " { " : "";
        for (var key in def) {
            if (typeof def[key] === "object") {
                queue.push({ key: key, value: def[key] });
            }
            else {
                result += toDash(key) + ":" + def[key] + ";";
            }
        }
        result += (prefix && prefix !== "") ? "}" : "";
        if (queue && queue.length > 0) {
            for (var _i = 0, queue_1 = queue; _i < queue_1.length; _i++) {
                var sub = queue_1[_i];
                result += goInto(prefix + (sub.key[0] === '&' ? sub.key.substr(1) : " " + sub.key), sub.value);
            }
        }
        return result;
    }
    function parseMeta(metaInformation) {
        for (var _i = 0, metaInformation_1 = metaInformation; _i < metaInformation_1.length; _i++) {
            var metadata = metaInformation_1[_i];
            if (metadata instanceof core_1.ComponentMetadata) {
                metadata.styles = [builtStyles];
            }
        }
    }
    return function (target) {
        var metaInformation = __ref__.getOwnMetadata('annotations', target);
        if (metaInformation) {
            parseMeta(metaInformation);
        }
    };
}
exports.Style = Style;
//# sourceMappingURL=Style.js.map