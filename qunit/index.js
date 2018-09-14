import "../node_modules/qunit/qunit/qunit.css";

//extensions
import "../js/inputmask.phone.extensions";
import "../js/phone-codes/phone-be";
import "../js/phone-codes/phone-nl";
import "../js/phone-codes/phone-ru";
import "../js/phone-codes/phone";

import Inputmask from "inputmask";
import qunit from "qunit";
import "./prototypeExtensions.js";
import simulator from "./simulator.js";


// android testing
Inputmask.extendDefaults({
    inputEventOnly: false
});

window.Inputmask = Inputmask; //inject globally for the simulator to detect inputeventonly

import tests_phone from "./tests_phone";
import tests_phone_world from "./tests_phone_world";
import tests_phonebe from "./tests_phonebe";
import tests_phonemx from "./tests_phonemx";
import tests_phonenl from "./tests_phonenl";
import tests_phoneru from "./tests_phoneru";

//inject simulater code
simulator(Inputmask);

//load tests
tests_phone(qunit, Inputmask);
//phone
tests_phone_world(qunit, Inputmask);
tests_phonebe(qunit, Inputmask);
tests_phonemx(qunit, Inputmask);
tests_phonenl(qunit, Inputmask);
tests_phoneru(qunit, Inputmask);

qunit.load();
// qunit.start();
