export default function (qunit, Inputmask) {
    var $ = Inputmask.dependencyLib;
    qunit.module("Phonebe masks");

    $.each(Inputmask.prototype.aliases.phonebe.phoneCodes, function (ndx, lmnt) {
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

        qunit.test("inputmask(\"phonebe\") - " + input, function (assert) {
            var $fixture = $("#qunit-fixture");
            $fixture.append('<input type="text" id="testmask" />');
            var testmask = document.getElementById("testmask");
            Inputmask("phonebe", {nullable: false}).mask(testmask);

            testmask.focus();
            $(testmask).val(input);
            assert.equal(testmask.value, expected, "Result " + testmask.value);
        });

    });

};
