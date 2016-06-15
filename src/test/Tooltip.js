import Tooltip from 'Tooltip';

describe("Construct a Tooltip Element", () => {
    it("A valid tooltip object without options needs to be constructed", () => {
        const tooltip = new Tooltip(document.createElement('div'));
        expect(tooltip instanceof Tooltip).toBe(true);
    });

    it("A Tooltip should bind events and destroy itself after", () => {
        const tooltip = new Tooltip(document.createElement('div'));
        tooltip.registerEvents();
        expect(tooltip.listeners.length).toBe(2);
        tooltip.destroy();
        expect(tooltip.listeners.length).toBe(0);
    });
});
