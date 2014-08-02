/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true, it:true*/

var expect = require('chai').expect,
    test = require('../../src/problems/reverse_string.js');

describe('Reverse String', function () {

    it('should reverse a string', function (done) {

        expect(test("the sky is blue")).to.equal("blue is sky the");
        done();

    });
});
