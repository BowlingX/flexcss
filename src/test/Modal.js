import Modal from 'Modal';
import setup_jasmine from 'setup_jasmine';
import $ from 'jquery';
import Widget from 'Widget';
setup_jasmine();

describe("Construct a Modal Element", () => {
    it("A valid modal object without options needs to be constructed", () => {
        var modal = new Modal(document.createElement('body'));
        expect(modal instanceof Modal).toBe(true);
    });
});

describe("Open a Modal Element", () => {
    it("Open a Modal from a widget", () => {
        var modal = new Modal(document.createElement('body'));
        modal.fromWidget(new Widget(document.createElement('div')))
    });

    it("Open a Modal from a widget, no element needs to be an async element", () => {
        var modal = new Modal(document.createElement('body'));
        modal.fromWidget(new Widget(document.createElement('div')))
    });
});