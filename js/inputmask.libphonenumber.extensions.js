/*
 Input Mask plugin extensions
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 -  Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 0.0.0-dev

 Phone extension.

 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["inputmask"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("inputmask"));
    }
}
(function (Inputmask, metadata) {
    var $ = Inputmask.dependencyLib;

    Inputmask.extendAliases({
        "libphonenumber": {
            regex: "\\+\\d{3} \\d{3} \\d{2} \\d{2}"
        }
    });
    return Inputmask;
}));
