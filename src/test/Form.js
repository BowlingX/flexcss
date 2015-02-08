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