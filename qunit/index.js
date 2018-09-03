import "../node_modules/qunitjs/qunit/qunit.css";
import "../css/inputmask.css";

//extensions
import "../js/inputmask.phone.extensions";
import "../js/phone-codes/phone-be";
import "../js/phone-codes/phone-nl";
import "../js/phone-codes/phone-ru";
import "../js/phone-codes/phone";

import Inputmask from "inputmask";
import qunit from "qunitjs";
import "./prototypeExtensions.js";
import simulator from "./simulator.js";


// android testing
Inputmask.extendDefaults({
    inputEventOnly: false
});

window.Inputmask = Inputmask; //inject globally for the simulator to detect inputeventonly

import tests_phone_world from "./tests_phone_world";
import tests_phonebe from "./tests_phonebe";
import tests_phonenl from "./tests_phonenl";
import tests_phoneru from "./tests_phoneru";

//inject simulater code
simulator(dependencyLib, Inputmask);
simulator(jQuery, Inputmask);

//load tests
tests_phone(qunit, dependencyLib, Inputmask);
//phone
tests_phone_world(qunit, dependencyLib, Inputmask);
tests_phonebe(qunit, dependencyLib, Inputmask);
tests_phonenl(qunit, dependencyLib, Inputmask);
tests_phoneru(qunit, dependencyLib, Inputmask);

qunit.load();
// qunit.start();
