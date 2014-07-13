/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true,it:true*/

var expect = require('chai').expect,
    test = require('../src/heap.js');

describe('Max Heap', function () {
    var module;

    it('should meet max-heap condition after initialized', function (done) {

        module = new test([ 1, 2, 3, 4, 5, 6, 7, 8 ]);
        expect(module.print()).to.eql([ 8, 5, 7, 4, 1, 6, 3, 2 ]);

        module = new test([ 1, 4, 7, 5, 2, 3, 6, 8 ]);
        expect(module.print()).to.eql([ 8, 5, 7, 4, 2, 3, 6, 1 ]);

        done();
    });

    it('should meet the max-heap condition after insertion', function (done) {

        module = new test([ 2, 3, 4, 5, 6, 7, 8 ]);
        module.add(1);
        expect(module.print()).to.eql([ 8, 7, 6, 4, 5, 3, 2, 1 ]);
        done();
    });

    it('should return the index of the element if it is in the heap', function (done) {

        module = new test([ 1, 2, 3, 4, 5, 6, 7, 8 ]);
        expect(module.search(7)).to.equal(2);
        done();
    });

    it('should meet the max-heap condition after deletion', function (done) {

        module = new test([ 1, 2, 3, 4, 5, 6, 7, 8 ]);
        expect(module.remove(7)).to.be.True;
        expect(module.print()).to.eql([ 8, 5, 6, 4, 1, 2, 3 ]);
        done();
    });
});
