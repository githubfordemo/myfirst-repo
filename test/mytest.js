var expect = require("chai").expect;

describe("demo test", function () {
    it("should be passed", function () {
        var arr = [3, 3, 4]
        expect(arr.length).to.be.equal(3);
        expect(arr.length).to.be.at.least(1);
    });
});