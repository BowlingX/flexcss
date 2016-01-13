'use strict';

import Dropdown from 'Dropdown';
import setup from 'setup_jasmine';
setup();

describe("Construct a Dropdown", () => {
    it("a valid dropdown object needs to be constructed", () => {
        const dropdown = new Dropdown(document.body, document.createElement('Darkener'));
        expect(dropdown instanceof Dropdown).toBe(true);
    });
});
