/*jslint indent: 4, nomen:true, white:true, continue:true */
'use strict';

var wordBreak = function (keyword, dictionary) {
    var i, pivot, length, match, callstack = [], dict = dictionary.reduce(function (obj, word) {
        obj[word] = true;
        return obj;
    }, {});
    length = dictionary.length;
    callstack.push(0);

    while (callstack.length > 0) {
        pivot = callstack.pop();
        for (i = pivot + 1; i < length; i += 1) {
            match = keyword.substring(pivot, i);
            if (!dict[match]) {
                continue;
            }
            if (i === length) {
                return true;
            }
            callstack.push(match);
        }
    }
    return false;
};

module.exports = wordBreak;
