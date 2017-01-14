import Util from 'util/Util';

describe("Util", () => {
    it("camelizes correctly", () => {
        expect(Util.dashToCamelCase('data-test-case')).toBe('dataTestCase');
    });
});
