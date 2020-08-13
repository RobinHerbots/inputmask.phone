/*!
 * /dist/inputmask.phone.extensions
 * https://github.com/RobinHerbots/inputmask.phone#readme
 * Copyright (c) 2010 - 2020 undefined
 * Licensed under the MIT license
 * Version: 1.0.4-beta.1
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Inputmask"));
	else if(typeof define === 'function' && define.amd)
		define(["Inputmask"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("Inputmask")) : factory(root["Inputmask"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _inputmask = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 Input Mask plugin extensions
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 -  Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 0.0.0-dev

 Phone extension.

 */
var $ = _inputmask["default"].dependencyLib;

function maskSort(a, b) {
  var maska = (a.mask || a).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, ""),
      maskb = (b.mask || b).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, "");
  return maska.localeCompare(maskb);
}

var analyseMaskBase = _inputmask["default"].prototype.analyseMask;

_inputmask["default"].prototype.analyseMask = function (mask, regexMask, opts) {
  var maskGroups = {};

  function reduceVariations(masks, previousVariation, previousmaskGroup) {
    previousVariation = previousVariation || "";
    previousmaskGroup = previousmaskGroup || maskGroups;

    if (previousVariation !== "") {
      previousmaskGroup[previousVariation] = {};
    }

    var variation = "",
        maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup;

    for (var i = masks.length - 1; i >= 0; i--) {
      mask = masks[i].mask || masks[i];
      variation = mask.substr(0, 1);
      maskGroup[variation] = maskGroup[variation] || [];
      maskGroup[variation].unshift(mask.substr(1));
      masks.splice(i, 1);
    }

    for (var ndx in maskGroup) {
      if (maskGroup[ndx].length > 500) {
        reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);
      }
    }
  }

  function rebuild(maskGroup) {
    var mask = "",
        submasks = [];

    for (var ndx in maskGroup) {
      if ($.isArray(maskGroup[ndx])) {
        if (maskGroup[ndx].length === 1) {
          submasks.push(ndx + maskGroup[ndx]);
        } else {
          submasks.push(ndx + opts.groupmarker[0] + maskGroup[ndx].join(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]) + opts.groupmarker[1]);
        }
      } else {
        submasks.push(ndx + rebuild(maskGroup[ndx]));
      }
    }

    if (submasks.length === 1) {
      mask += submasks[0];
    } else {
      mask += opts.groupmarker[0] + submasks.join(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]) + opts.groupmarker[1];
    }

    return mask;
  }

  if (opts.phoneCodes) {
    if (opts.phoneCodes && opts.phoneCodes.length > 1000) {
      mask = mask.substr(1, mask.length - 2);
      reduceVariations(mask.split(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]));
      mask = rebuild(maskGroups);
    } //escape 9 definition


    mask = mask.replace(/9/g, "\\9");
  } // console.log(mask);


  var mt = analyseMaskBase.call(this, mask, regexMask, opts);
  return mt;
};

_inputmask["default"].extendAliases({
  "abstractphone": {
    groupmarker: ["<", ">"],
    countrycode: "",
    phoneCodes: [],
    keepStatic: false,
    usePrototypeDefinitions: false,
    mask: function mask(opts) {
      opts.definitions = {
        "#": _inputmask["default"].prototype.definitions["9"]
      };
      var sorted = opts.phoneCodes.sort(maskSort); // console.table(sorted);

      return sorted;
    },
    onBeforeMask: function onBeforeMask(value, opts) {
      var processedValue = value.replace(/^0{1,2}/, "").replace(/[\s]/g, "");

      if (processedValue.indexOf(opts.countrycode) > 1 || processedValue.indexOf(opts.countrycode) === -1) {
        processedValue = "+" + opts.countrycode + processedValue;
      }

      return processedValue;
    },
    onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
      var unmasked = maskedValue.replace(/[()#-]/g, "");
      return unmasked;
    },
    inputmode: "tel"
  }
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=inputmask.phone.extensions.js.map