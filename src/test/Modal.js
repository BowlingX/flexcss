import Modal, { EVENT_MODAL_OPENED } from 'Modal';
import setup from 'setup_jasmine';
import Widget from 'Widget';
setup();

describe("Construct a Modal Element", () => {
    it("A valid modal object without options needs to be constructed", () => {
        const modal = new Modal(document.createElement('body'));
        expect(modal instanceof Modal).toBe(true);
    });
});

describe("Open a Modal Element", () => {
    it("Open a Modal from a widget", () => {
        const modal = new Modal(document.createElement('body'));
        modal.fromWidget(new Widget(document.createElement('div')));
    });

    it("Open a Modal from a widget, no element needs to be an async element", () => {
        const modal = new Modal(document.createElement('body'));
        modal.fromWidget(new Widget(document.createElement('div')));
    });
});

describe("Expect Events to be correctly fired when open programmatically", () => {
    let didOpen;
    let originalEvent;

    beforeEach(done => {
        const el = document.createElement('div');
        const modal = new Modal(document.createElement('body'));
        modal.fromWidget(new Widget(el));

        el.addEventListener(EVENT_MODAL_OPENED, (e) => {
            didOpen = true;
            originalEvent = e.originalEvent;
            done();
        });
    });

    it("should fire open event", () => {
        expect(didOpen).toBe(true);
        // because we open the modal programmatically, there should be no inherit event
        expect(originalEvent).toBe(undefined);
    });
});
