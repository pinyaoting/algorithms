/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true,it:true*/

var expect = require('chai').expect,
    test = require('../src/stack.js');

describe('Stack', function () {
    var module;

    it('should be LIFO', function (done) {

        module = test();
        module.push('a');
        module.push('b');
        module.push('c');
        expect(module.pop()).to.equal('c');
        expect(module.pop()).to.equal('b');
        expect(module.pop()).to.equal('a');
        done();

    });
});
