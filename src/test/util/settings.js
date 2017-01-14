import Settings from 'util/Settings';

describe("Global Settings", () => {
    it("Update global settings should be possible", () => {
        Settings.setup({ added: true, smallBreakpoint: 1000 });
        const settings = Settings.get();
        expect(settings.added, true);
        expect(settings.smallBreakpoint, 1000);
    });
});
