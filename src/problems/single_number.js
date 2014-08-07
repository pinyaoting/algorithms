/*jslint indent: 4, nomen:true, white:true, bitwise: true */
'use strict';

var findSingleNumber = function (numbers) {
    return numbers.reduce(function (prev, curr) { return prev ^ curr; });
};

module.exports = findSingleNumber;
