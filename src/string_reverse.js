/*jslint indent: 4, nomen:true, white:true */
'use strict';

var reverseString = function (data) {
    var length = data.length,
	reverse = [],
	i;

    for (i = 1; i <= length; i += 1) {
        reverse.push(data[length - i]);
    }

    return reverse.join("");
};

exports.reverse = reverseString;
