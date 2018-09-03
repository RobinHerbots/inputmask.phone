/*!
* inputmask.phone.extensions.js
* https://github.com/RobinHerbots/inputmask.phone#readme
* Copyright (c) 2010 - 2018 
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 0.0.0
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "inputmask" ], factory) : "object" == typeof exports ? module.exports = factory(require("inputmask")) : factory(window.Inputmask);
}(function(Inputmask) {
    var $ = Inputmask.dependencyLib;
    function maskSort(a, b) {
        var maska = (a.mask || a).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, ""), maskb = (b.mask || b).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, "");
        return maska.localeCompare(maskb);
    }
    var analyseMaskBase = Inputmask.prototype.analyseMask;
    return Inputmask.prototype.analyseMask = function(mask, regexMask, opts) {
        var maskGroups = {};
        return opts.phoneCodes && (opts.phoneCodes && 1e3 < opts.phoneCodes.length && (function reduceVariations(masks, previousVariation, previousmaskGroup) {
            previousmaskGroup = previousmaskGroup || maskGroups, "" !== (previousVariation = previousVariation || "") && (previousmaskGroup[previousVariation] = {});
            for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; 0 <= i; i--) maskGroup[variation = (mask = masks[i].mask || masks[i]).substr(0, 1)] = maskGroup[variation] || [], 
            maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);
            for (var ndx in maskGroup) 500 < maskGroup[ndx].length && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);
        }((mask = mask.substr(1, mask.length - 2)).split(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0])), 
        mask = function rebuild(maskGroup) {
            var mask = "", submasks = [];
            for (var ndx in maskGroup) $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker[0] + maskGroup[ndx].join(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]) + opts.groupmarker[1]) : submasks.push(ndx + rebuild(maskGroup[ndx]));
            return 1 === submasks.length ? mask += submasks[0] : mask += opts.groupmarker[0] + submasks.join(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]) + opts.groupmarker[1], 
            mask;
        }(maskGroups)), mask = mask.replace(/9/g, "\\9")), analyseMaskBase.call(this, mask, regexMask, opts);
    }, Inputmask.extendAliases({
        abstractphone: {
            groupmarker: [ "<", ">" ],
            countrycode: "",
            phoneCodes: [],
            keepStatic: "auto",
            mask: function(opts) {
                return opts.definitions = {
                    "#": Inputmask.prototype.definitions[9]
                }, opts.phoneCodes.sort(maskSort);
            },
            onBeforeMask: function(value, opts) {
                var processedValue = value.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                return (1 < processedValue.indexOf(opts.countrycode) || -1 === processedValue.indexOf(opts.countrycode)) && (processedValue = "+" + opts.countrycode + processedValue), 
                processedValue;
            },
            onUnMask: function(maskedValue, unmaskedValue, opts) {
                return maskedValue.replace(/[()#-]/g, "");
            },
            inputmode: "tel"
        }
    }), Inputmask;
});