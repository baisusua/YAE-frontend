var assert = require('assert');
var Person = require("../src/hooks");

describe('Person', function() {

    var p;
    before(function() {
        p = new Person('keller', 24);
    });

    describe('#getName()', function() {
        it('return a string which value is keller', function() {
            assert.equal('string', typeof p.getName());
            assert.equal('keller', p.getName());
        });
    });

    describe('#getAge()', function() {
        it('return a number which value is 24', function() {
            assert.equal('number', typeof p.getAge());
            assert.equal(24, p.getAge());
        });
    });
});