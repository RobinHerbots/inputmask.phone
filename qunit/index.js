import Inputmask from "inputmask";
import jQuery from "jquery";
import qunit from "qunit";

import "./prototypeExtensions.js";
import simulator from "./simulator.js";
import "../lib/inputmask.phone.extensions";


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
simulator(Inputmask.dependencyLib, Inputmask);
simulator(jQuery, Inputmask);

//load tests
tests_phone(qunit, Inputmask);
//phone
tests_phone_world(qunit, Inputmask);
tests_phonebe(qunit, Inputmask);
tests_phonemx(qunit, Inputmask);
tests_phonenl(qunit, Inputmask);
tests_phoneru(qunit, Inputmask);

qunit.start();
