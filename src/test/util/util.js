import Util from 'util/Util';

describe("Util", function () {
    it("camelizes correctly", function () {
        expect(Util.dashToCamelCase('data-test-case')).toBe('dataTestCase');
    });
});