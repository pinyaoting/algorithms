/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true,it:true*/

var expect = require('chai').expect,
    test = require('../../src/data-structures/lru-cache.js');

describe('LRU Cache', function () {
    var module;

    it('should implement get and set', function (done) {
        module = new test();
        module.set('foo', 'bar');
        expect(module.get('foo')).to.equal('bar');
        done();
    });

    it('should remove least-recently-used element when its capacity is reached', function (done) {

        module = new test(3);
        module.set('a', 'apple');
        module.set('b', 'banana');
        module.set('c', 'coconut');
        module.get('a');
        module.set('d', 'dragonfruit');
        expect(module.get('b')).to.equal(-1);
        done();

    });
});
