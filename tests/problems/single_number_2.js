/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true, it:true*/

var expect = require('chai').expect,
    test = require('../../src/problems/single_number_2.js');

describe('Single Number', function () {

    it('should find the one number with single occurrence in a series of numbers where all other numbers occurred thrice', function (done) {
        var subject = [1,7,3,5,4,6,2,4,5,3,6,1,2,3,4,1,2,6,5];
        expect(test(subject)).to.equal(7);
        done();
    });

});
