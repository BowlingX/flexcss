import Settings from 'util/Settings';

describe("Global Settings", function () {
    it("Update global settings should be possible", function () {
        Settings.setup({added: true, smallBreakpoint: 1000});
        let settings = Settings.get();
        expect(settings.added, true);
        expect(settings.smallBreakpoint, 1000);
    });
});
