'use strict';

import setup from 'setup_jasmine';
import Toggleable from 'Toggleable';

setup();

describe('Construct a Toggleable instance', () => {

    it('should be possible', () => {
        expect(new Toggleable(document.body) instanceof Toggleable).toBe(true);
    });
});
