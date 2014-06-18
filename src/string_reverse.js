/*jslint indent: 4, nomen:true, white:true */
'use strict';

var reverseString = function (data) {
    return data.split(' ').reduce(function (prev, current) {
        return current + ' ' + prev;
    });
};

exports.reverse = reverseString;
