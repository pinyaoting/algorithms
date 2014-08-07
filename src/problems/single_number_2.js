/*jslint indent: 4, nomen:true, white:true, bitwise: true */
'use strict';

var findSingleNumber = function (numbers) {
    var occurrence,
        solutionSet;
    
    solutionSet = numbers.reduce(function (results, number) {
        occurrence = results[number];
        if (!occurrence) {
            results[number] = 1;
            return results;
        }
        if (occurrence === 2) {
            delete results[number];
            return results;
        }
        results[number] += 1;
        return results; 
    }, {});

    return parseInt(Object.keys(solutionSet)[0], 10);
};

module.exports = findSingleNumber;
