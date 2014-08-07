/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true, it:true*/

var expect = require('chai').expect,
    test = require('../../src/problems/word_break.js');

describe('Word Break', function () {

    it('should return true iff the keyword can be segmented into one or more dictionary words', function (done) {
        var keyword = "helloworld",
            dictionary = ["hello", "is", "there", "anybody", "in", "there"];
        expect(test(keyword, dictionary)).to.be.False;

        dictionary.push('world');
        expect(test(keyword, dictionary)).to.be.True;
        done();
    });

});
