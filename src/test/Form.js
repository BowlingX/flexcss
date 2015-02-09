import Form from 'Form';

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
        var htmlForm = document.createElement('form');
        var requiredInput = document.createElement('input');
        requiredInput.setAttribute('required', 'required');
        htmlForm.appendChild(requiredInput);
        var form = new Form(htmlForm);
        htmlForm.submit();
    });
});