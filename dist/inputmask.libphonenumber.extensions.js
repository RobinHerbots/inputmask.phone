/*!
 * /dist/inputmask.libphonenumber.extensions
 * https://github.com/RobinHerbots/inputmask.phone#readme
 * Copyright (c) 2010 - 2020 undefined
 * Licensed under the MIT license
 * Version: 1.0.4-beta.1
 */
!function webpackUniversalModuleDefinition(root, factory) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = factory(require("Inputmask")); else if ("function" == typeof define && define.amd) define([ "Inputmask" ], factory); else {
        var a = "object" == typeof exports ? factory(require("Inputmask")) : factory(root.Inputmask);
        for (var i in a) ("object" == typeof exports ? exports : root)[i] = a[i];
    }
}(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
    return modules = [ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__0__;
    }, , function(module, exports, __webpack_require__) {
        "use strict";
        var _inputmask = _interopRequireDefault(__webpack_require__(0));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        _inputmask.default.extendAliases({
            libphonenumber: {
                regex: "\\+\\d{3} \\d{3} \\d{2} \\d{2}"
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
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 2);
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