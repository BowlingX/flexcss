import setup_jasmine from 'setup_jasmine';
import $ from 'jquery';
import Widget from 'Widget';
import Toggleable from 'Toggleable';

setup_jasmine();

describe('Construct a Toggleable instance', () => {

    it('should be possible', () => {
        expect(new Toggleable(document.body) instanceof Toggleable).toBe(true);
    })
});