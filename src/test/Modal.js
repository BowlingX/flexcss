import Modal from 'Modal';
import setup_jasmine from 'setup_jasmine';
import $ from 'jquery';
setup_jasmine();

describe("Construct a Modal Element", () => {
    it("A valid modal object without options needs to be constructed", () => {
        var form = new Modal(document.createElement('body'));
        expect(form instanceof Modal).toBe(true);
    });
});