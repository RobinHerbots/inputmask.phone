/*!
 * /dist/inputmask.phone.extensions
 * https://github.com/RobinHerbots/inputmask.phone#readme
 * Copyright (c) 2010 - 2020 undefined
 * Licensed under the MIT license
 * Version: 1.0.4-beta.4
 */
!function webpackUniversalModuleDefinition(root, factory) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = factory(require("Inputmask")); else if ("function" == typeof define && define.amd) define([ "Inputmask" ], factory); else {
        var a = "object" == typeof exports ? factory(require("Inputmask")) : factory(root.Inputmask);
        for (var i in a) ("object" == typeof exports ? exports : root)[i] = a[i];
    }
}(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
    return modules = [ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__0__;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _inputmask = _interopRequireDefault(__webpack_require__(0));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var $ = _inputmask.default.dependencyLib;
        function maskSort(a, b) {
            var maska = (a.mask || a).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, ""), maskb = (b.mask || b).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, "");
            return maska.localeCompare(maskb);
        }
        var analyseMaskBase = _inputmask.default.prototype.analyseMask;
        _inputmask.default.prototype.analyseMask = function(mask, regexMask, opts) {
            var maskGroups = {};
            function reduceVariations(masks, previousVariation, previousmaskGroup) {
                previousVariation = previousVariation || "", previousmaskGroup = previousmaskGroup || maskGroups, 
                "" !== previousVariation && (previousmaskGroup[previousVariation] = {});
                for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; 0 <= i; i--) mask = masks[i].mask || masks[i], 
                variation = mask.substr(0, 1), maskGroup[variation] = maskGroup[variation] || [], 
                maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);
                for (var ndx in maskGroup) 500 < maskGroup[ndx].length && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);
            }
            function rebuild(maskGroup) {
                var mask = "", submasks = [];
                for (var ndx in maskGroup) $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker[0] + maskGroup[ndx].join(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]) + opts.groupmarker[1]) : submasks.push(ndx + rebuild(maskGroup[ndx]));
                return 1 === submasks.length ? mask += submasks[0] : mask += opts.groupmarker[0] + submasks.join(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]) + opts.groupmarker[1], 
                mask;
            }
            opts.phoneCodes && (opts.phoneCodes && 1e3 < opts.phoneCodes.length && (mask = mask.substr(1, mask.length - 2), 
            reduceVariations(mask.split(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0])), 
            mask = rebuild(maskGroups)), mask = mask.replace(/9/g, "\\9"));
            var mt = analyseMaskBase.call(this, mask, regexMask, opts);
            return mt;
        }, _inputmask.default.extendAliases({
            abstractphone: {
                groupmarker: [ "<", ">" ],
                countrycode: "",
                phoneCodes: [],
                keepStatic: !1,
                usePrototypeDefinitions: !1,
                mask: function mask(opts) {
                    opts.definitions = {
                        "#": _inputmask.default.prototype.definitions[9]
                    };
                    var sorted = opts.phoneCodes.sort(maskSort);
                    return sorted;
                },
                onBeforeMask: function onBeforeMask(value, opts) {
                    var processedValue = value.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                    return (1 < processedValue.indexOf(opts.countrycode) || -1 === processedValue.indexOf(opts.countrycode)) && (processedValue = "+" + opts.countrycode + processedValue), 
                    processedValue;
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    var unmasked = maskedValue.replace(/[()#-]/g, "");
                    return unmasked;
                },
                inputmode: "tel"
            }
        });
    } ], installedModules = {}, __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module.default;
        } : function getModuleExports() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 1);
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    var modules, installedModules;
});