import Form, {EVENT_FORM_READY} from 'Form';
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
        $('#submit-test-form').trigger('click');
        expect(htmlForm.checkValidity()).toBe(true);

    });
});

describe("Submit a form with validation", () => {
    beforeEach(() => {
        loadFixtures('form-with-validation.html');
    });

    it("submit a form with validation (invalid)", () => {
        var $htmlForm = $('#test-form'), htmlForm = $htmlForm[0];
        var form = new Form(htmlForm);
        $('#submit-test-form').trigger('click');
        expect(htmlForm.checkValidity()).toBe(false);
    });
});

describe("Submit a form with a custom validator", () => {
    beforeEach(() => {
        loadFixtures('form-with-custom-validator.html');
    });

    it("submit a form with custom validator and fail input", () => {
        var $htmlForm = $('#test-form'), htmlForm = $htmlForm[0];
        var form = new Form(htmlForm);
        $('#submit-test-form').trigger('click');

    });
});