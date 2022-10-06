describe("configure tests", function() {
    it("undef if docRoot does not exist", function() {
        expect(configure({docRoot: "/xxx"})).toBeUndefined();
    })

    /*...*/
});