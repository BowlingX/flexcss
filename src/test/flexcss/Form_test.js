import Form from 'Form';

describe("Form Validation", function() {
    it("A Valid form object needs to be constructed", function() {
        expect(true).toBe(true);

        var form = new Form(document.createElement('form'));
        expect(form).toBe(form);
    });
});