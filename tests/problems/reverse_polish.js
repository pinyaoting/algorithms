/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true, it:true*/

var expect = require('chai').expect,
    test = require('../../src/problems/reverse_polish.js');

describe('Reverse Polish Notation', function () {

    it('should evaluate an arithmatic expression in postfix notation', function (done) {

        expect(test(["2", "1", "+", "3", "*"])).to.equal(9);
        expect(test(["4", "13", "5", "/", "+"])).to.equal(6);
        done();

    });
});
