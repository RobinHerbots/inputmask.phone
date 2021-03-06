export default function (qunit, Inputmask) {
    var $ = Inputmask.dependencyLib;
    qunit.module("Phoneru masks");


    $.each(Inputmask.prototype.aliases.phoneru.phoneCodes, function (ndx, lmnt) {
        var ndx = 1, input, expected = lmnt.mask;
        while (expected.match(/#/)) {
            expected = expected.replace(/#/, ndx++);
            if (ndx > 9) ndx = 1;
        }
        input = expected;
        //input = input.replace(/\+/g, "");
        input = input.replace(/\(/g, "");
        input = input.replace(/\)/g, "");
        input = input.replace(/-/g, "");

        qunit.test("inputmask(\"phoneru\") - " + input, function (assert) {
            var $fixture = $("#qunit-fixture");
            $fixture.append('<input type="text" id="testmask" />');
            var testmask = document.getElementById("testmask");
            Inputmask("phoneru", {nullable: false}).mask(testmask);

            testmask.focus();


            $(testmask).val(input);
            assert.equal(testmask.value, expected, "Result " + testmask.value);
        });

    });

};
