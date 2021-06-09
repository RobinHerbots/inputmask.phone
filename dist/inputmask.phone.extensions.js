/*!
 * /dist/inputmask.phone.extensions
 * https://github.com/RobinHerbots/inputmask.phone#readme
 * Copyright (c) 2010 - 2021 undefined
 * Licensed under the MIT license
 * Version: 1.0.5-beta.5
 */
!function(e, r) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = r(require("Inputmask")); else if ("function" == typeof define && define.amd) define([ "Inputmask" ], r); else {
        var t = "object" == typeof exports ? r(require("Inputmask")) : r(e.Inputmask);
        for (var o in t) ("object" == typeof exports ? exports : e)[o] = t[o];
    }
}(self, (function(e) {
    return (() => {
        "use strict";
        var r = {
            581: r => {
                r.exports = e;
            }
        }, t = {};
        function o(e) {
            var n = t[e];
            if (void 0 !== n) return n.exports;
            var a = t[e] = {
                exports: {}
            };
            return r[e](a, a.exports, o), a.exports;
        }
        return (() => {
            var e, r = (e = o(581)) && e.__esModule ? e : {
                default: e
            };
            var t = r.default.dependencyLib;
            function n(e, r) {
                var t = (e.mask || e).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, ""), o = (r.mask || r).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, "");
                return t.localeCompare(o);
            }
            var a = r.default.prototype.analyseMask;
            r.default.prototype.analyseMask = function(e, r, o) {
                var n = {};
                return o.phoneCodes && (o.phoneCodes && o.phoneCodes.length > 1e3 && (function r(t, o, a) {
                    a = a || n, "" !== (o = o || "") && (a[o] = {});
                    for (var p = "", u = a[o] || a, s = t.length - 1; s >= 0; s--) u[p = (e = t[s].mask || t[s]).substr(0, 1)] = u[p] || [], 
                    u[p].unshift(e.substr(1)), t.splice(s, 1);
                    for (var i in u) u[i].length > 500 && r(u[i].slice(), i, u);
                }((e = e.substr(1, e.length - 2)).split(o.groupmarker[1] + o.alternatormarker + o.groupmarker[0])), 
                e = function e(r) {
                    var n = "", a = [];
                    for (var p in r) t.isArray(r[p]) ? 1 === r[p].length ? a.push(p + r[p]) : a.push(p + o.groupmarker[0] + r[p].join(o.groupmarker[1] + o.alternatormarker + o.groupmarker[0]) + o.groupmarker[1]) : a.push(p + e(r[p]));
                    return 1 === a.length ? n += a[0] : n += o.groupmarker[0] + a.join(o.groupmarker[1] + o.alternatormarker + o.groupmarker[0]) + o.groupmarker[1], 
                    n;
                }(n)), e = e.replace(/9/g, "\\9")), a.call(this, e, r, o);
            }, r.default.extendAliases({
                abstractphone: {
                    groupmarker: [ "<", ">" ],
                    countrycode: "",
                    phoneCodes: [],
                    keepStatic: !1,
                    usePrototypeDefinitions: !1,
                    mask: function(e) {
                        return e.definitions = {
                            "#": r.default.prototype.definitions[9]
                        }, e.phoneCodes.sort(n);
                    },
                    onBeforeMask: function(e, r) {
                        var t = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                        return (t.indexOf(r.countrycode) > 1 || -1 === t.indexOf(r.countrycode)) && (t = "+" + r.countrycode + t), 
                        t;
                    },
                    onUnMask: function(e, r, t) {
                        return e.replace(/[()#-]/g, "");
                    },
                    inputmode: "tel"
                }
            });
        })(), {};
    })();
}));
//# sourceMappingURL=inputmask.phone.extensions.js.map