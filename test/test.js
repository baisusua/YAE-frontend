// test.js
var assert = require("assert");
var bigger = require("../src").bigger;
var asyncfun = require("../src").asyncfun;

//同步测试代码例子
describe('bigger', function() {
    describe('#bigger()', function () {
        it('should return the bigger number', function () {
            assert.equal(1, bigger(1, 0));
            assert.equal(0, bigger(-1, 0));
            assert.equal(0, bigger(0, 0));
        });
    });
});

//异步测试代码例子
describe('asyncfun', function() {
    describe('#asyfun()', function () {
        it('run an asynchronous function', function (done) {
            asyncfun(done);
        });
    });
});

