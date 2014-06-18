/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true, it:true*/

var expect = require('chai').expect,
    test = require('../src/string_reverse.js');

describe('String Reverse', function () {
    var module;

    it('should reverse a string', function (done) {

        expect(test.reverse("the sky is blue")).to.equal("blue is sky the");
        done();

    });
});
