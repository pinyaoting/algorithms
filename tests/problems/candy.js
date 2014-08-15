/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true, it:true*/

var expect = require('chai').expect,
    test = require('../../src/problems/candy.js');

describe('Candy', function () {

    it('should find the minimum number of candies', function (done) {
        var ratings = [3,6,7,5,4,2,8,1];
        expect(test(ratings)).to.equal(16);
        done();
    });

});
