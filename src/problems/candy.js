'use strict';

var candy = function (ratings) {
    var i, j,
        length = ratings.length - 1,
        downwardLength = 0,
        results = [];

    results[0] = 1;
    for (i = 0; i < length; i += 1) {
        if (ratings[i] === ratings[i + 1]) {
            results[i + 1] = 1;
        } else if (ratings[i] > ratings[i + 1]) {
            downwardLength += 1;
            results[i + 1] = 1;
        } else {
            results[i + 1] = results[i] + 1;

            for (j = 1; j <= downwardLength; j += 1) {
                if (results[i - j] < results[i - j + 1] + 1) {
                    results[i - j] = results[i - j + 1] + 1;
                }
            }
            downwardLength = 0;
        }
    }
    return results.reduce(function (prev, curr) {
        return prev + curr;
    });
};

module.exports = candy;
