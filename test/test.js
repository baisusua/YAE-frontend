// test.js
var assert = require("assert");
var index = require("../src");

describe('Index', function() {
    describe('#index()', function () {
        it('should return the bigger number', function () {
            assert.equal(1, index(1, 0));
            assert.equal(0, index(-1, 0));
            assert.equal(0, index(0, 0));
        });
    });
});