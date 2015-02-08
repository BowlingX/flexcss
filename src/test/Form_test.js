import Form from 'Form';

describe("Construct a Form Element", function() {
    it("A Valid form object without parameters needs to be constructed", function() {
        var form = new Form(document.createElement('form'));
        expect(form).toBe(form);
    });

    it("A Valid form object with overwritten default parameters needs to be constructed", function(){
        var form = new Form(document.createElement('form'), {createTooltips:false, appendError:true});
        expect(form.options.createTooltips).toBe(false);
        expect(form.options.appendError).toBe(true);
    })
});