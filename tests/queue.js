/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true,it:true */

var expect = require('chai').expect,
    test = require('../src/queue.js');

describe('Queue', function () {
    var module;

    it('should be FIFO', function (done) {

        module = new test();
        module.enqueue('a');
        module.enqueue('b');
        module.enqueue('c');
        expect(module.dequeue()).to.equal('a');
        expect(module.dequeue()).to.equal('b');
        expect(module.dequeue()).to.equal('c');
        done();

    });
});
