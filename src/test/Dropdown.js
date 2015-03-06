import Dropdown from 'Dropdown';
import setup_jasmine from 'setup_jasmine';
import $ from 'jquery';
setup_jasmine();

describe("Construct a Dropdown", () => {
    it("a valid dropdown object needs to be constructed", () => {
        var dropdown = new Dropdown(document.body, document.createElement('Darkener'));
        expect(dropdown instanceof Dropdown).toBe(true);
    });
});
