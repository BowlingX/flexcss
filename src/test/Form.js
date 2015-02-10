import Form from 'Form';
import setup_jasmine from 'setup_jasmine';
import $ from 'jquery';
setup_jasmine();

describe("Construct a Form Element", function() {
    it("A valid form object without options needs to be constructed", function() {
        var form = new Form(document.createElement('form'));
        expect(form).toBe(form);
    });

    it("A valid form object with overwritten default options needs to be constructed", function(){
        var form = new Form(document.createElement('form'), {createTooltips:false, appendError:true});
        expect(form).toBe(form);

        // check created options
        expect(form.options.createTooltips).toBe(false);
        expect(form.options.appendError).toBe(true);
    })
});

describe("Sumit a Form", function(){

    it("Just submit an empty form", function(){
        loadFixtures('simple-form.html');

        var $htmlForm = $('#test-form'), htmlForm = $htmlForm[0];
        var form = new Form(htmlForm);
        $htmlForm.trigger('submit');
    });
});