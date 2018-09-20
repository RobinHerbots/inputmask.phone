/*!
* inputmask.libphonenumber.extensions.js
* https://github.com/RobinHerbots/inputmask.phone#readme
* Copyright (c) 2010 - 2018 
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 1.0.4-beta.0
*/

(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "inputmask" ], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("inputmask"));
    }
})(function(Inputmask, metadata) {
    var $ = Inputmask.dependencyLib;
    Inputmask.extendAliases({
        libphonenumber: {
            regex: "\\+\\d{3} \\d{3} \\d{2} \\d{2}"
        }
    });
    return Inputmask;
});