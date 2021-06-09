/*!
 * /dist/inputmask.libphonenumber.extensions
 * https://github.com/RobinHerbots/inputmask.phone#readme
 * Copyright (c) 2010 - 2021 undefined
 * Licensed under the MIT license
 * Version: 1.0.6-beta.0
 */
!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("Inputmask")); else if ("function" == typeof define && define.amd) define([ "Inputmask" ], t); else {
        var r = "object" == typeof exports ? t(require("Inputmask")) : t(e.Inputmask);
        for (var o in r) ("object" == typeof exports ? exports : e)[o] = r[o];
    }
}(self, (function(e) {
    return (() => {
        "use strict";
        var t = {
            581: t => {
                t.exports = e;
            }
        }, r = {};
        function o(e) {
            var n = r[e];
            if (void 0 !== n) return n.exports;
            var s = r[e] = {
                exports: {}
            };
            return t[e](s, s.exports, o), s.exports;
        }
        var n;
        return ((n = o(581)) && n.__esModule ? n : {
            default: n
        }).default.extendAliases({
            libphonenumber: {
                regex: "\\+\\d{3} \\d{3} \\d{2} \\d{2}"
            }
        }), {};
    })();
}));
//# sourceMappingURL=inputmask.libphonenumber.extensions.js.map