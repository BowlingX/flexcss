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

describe("Submit a simple Form", function(){
    beforeEach(function(){
        loadFixtures('simple-form.html');
    });

    it("submit an empty form (no validation)", function(){
        var $htmlForm = $('#test-form'), htmlForm = $htmlForm[0];
        var form = new Form(htmlForm);
        $('#submit-test-form').trigger('click');
    });
});

describe("Submit a form with validation", function(){
    beforeEach(function(){
        loadFixtures('form-with-validation.html');
    });

    it("submit a form with validation", function(){

        var $htmlForm = $('#test-form'), htmlForm = $htmlForm[0];
        var form = new Form(htmlForm);
        $('#submit-test-form').trigger('click');


    });
});