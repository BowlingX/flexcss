import Tooltip from 'Tooltip';

describe("Construct a Tooltip Element", function() {
    it("A valid tooltip object without options needs to be constructed", function() {
        var tooltip = new Tooltip(document.createElement('div'));
        expect(tooltip instanceof Tooltip).toBe(true);
    });
});