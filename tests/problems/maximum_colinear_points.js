/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true, it:true*/

var expect = require('chai').expect,
    Point = require('../../src/data-structures/point.js'),
    test = require('../../src/problems/maximum_colinear_points.js');

describe('Maximum Colinear Points', function () {

    it('should return the maximum number of colinear points on a plane', function (done) {

        var subject = [new Point(1,1), new Point(2,2), new Point(-3,-3), new Point(0,0),
        new Point(5,7), new Point(4,3), new Point(-2,6)];
        expect(test(subject)).to.equal(4);
        done();

    });
});
