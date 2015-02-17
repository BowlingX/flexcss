import Modal from 'Modal';
import setup_jasmine from 'setup_jasmine';
import $ from 'jquery';
import Widget from 'Widget';
setup_jasmine();

describe("Construct a Modal Element", () => {
    it("A valid modal object without options needs to be constructed", () => {
        var form = new Modal(document.createElement('body'));
        expect(form instanceof Modal).toBe(true);
    });
});

describe("Open a Modal Element", () => {
    it("Open a Modal", () => {
        var form = new Modal(document.createElement('body'));
        form.fromWidget(new Widget(document.createElement('div')))
    });
});