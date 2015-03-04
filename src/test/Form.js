import Form, {EVENT_FORM_READY, EVENT_FORM_SUBMIT, EVENT_FORM_AFTER_AJAX_SUBMIT} from 'Form';
import setup_jasmine from 'setup_jasmine';
import $ from 'jquery';
setup_jasmine();

describe("Construct a Form Element", () => {
    it("A valid form object without options needs to be constructed", () => {
        var form = new Form(document.createElement('form'));
        expect(form instanceof Form).toBe(true);
    });

    it("A valid form object with overwritten default options needs to be constructed", () => {
        var form = new Form(document.createElement('form'), {createTooltips: false, appendError: true});
        expect(form instanceof Form).toBe(true);

        // check created options
        expect(form.options.createTooltips).toBe(false);
        expect(form.options.appendError).toBe(true);
    })
});

describe("Submit a simple Form", () => {
    beforeEach(() => {
        loadFixtures('simple-form.html');
    });

    it("submit an empty form (no validation)", () => {
        var $htmlForm = $('#test-form'), htmlForm = $htmlForm[0];
        var form = new Form(htmlForm);
        expect(htmlForm.checkValidity()).toBe(true);

    });
});

describe("Submit a form with validation", () => {
    beforeEach(() => {
        loadFixtures('form-with-validation.html');
    });

    it("submit a form with browser-validation (invalid)", () => {
        var $htmlForm = $('#test-form'), htmlForm = $htmlForm[0];
        var form = new Form(htmlForm);
        expect(htmlForm.checkValidity()).toBe(false);
    });
});


describe('Create a form with custom validations', function () {

    var form, submitted, htmlForm;

    beforeEach((done) => {
        loadFixtures('form-with-custom-validator.html');
        var $htmlForm = $('#test-form');
        htmlForm = $htmlForm[0];
        form = new Form(htmlForm);
        // set a value
        $('#sample-input').val('test');

        // test this value as a custom validator
        form.registerValidator('custom', (field) => {
            return new Promise((r) => {
                r(field.value === 'test');
            })
        });

        // submit form
        $('#submit-test-form').trigger('click');

        htmlForm.addEventListener(EVENT_FORM_SUBMIT, (e) => {
            // prevent form from submit, otherwise tests result in a strange output
            e.preventDefault();
            submitted = true;
            done();
        });
    });

    it("submit the form", function () {
        expect(form instanceof Form).toBe(true);
        expect(submitted).toBe(true);
        expect(htmlForm.checkValidity()).toBe(true);
    })
});

describe('Create a form with remote validations', function () {
    var form, submitted, htmlForm;
    beforeEach((done) => {
        loadFixtures('form-with-remote-validation.html');
        var $htmlForm = $('#test-form');
        htmlForm = $htmlForm[0];
        form = new Form(htmlForm);
        // set a value
        $('#sample-input').val('test');


        // submit form
        $('#submit-test-form').trigger('click');

        htmlForm.addEventListener(EVENT_FORM_AFTER_AJAX_SUBMIT, () => {
            submitted = true;
            done();
        });
    });
    it("submit the form", function () {
        expect(form instanceof Form).toBe(true);
        expect(submitted).toBe(true);
        expect(htmlForm.checkValidity()).toBe(true);
    })
});