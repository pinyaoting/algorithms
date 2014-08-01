/*jslint indent: 4, nomen:true, white:true */
'use strict';
var findMaxPoints;

/*
 * Given an array of points on a plane, find the maximum number of points that are co-linear.
 */
findMaxPoints = function (points) {
    if (!Array.isArray(points)) {
        return;
    }

    var i, j, occurrence, max, slope, count,
        length = points.length,
        results = [];

    for (i = 0; i < length; i += 1) {
        occurrence = {};    // the occurrence of slopes between Point j and Point i
        max = 0;            // the maximum number of points that share the same line with Point i
        for (j = i + 1; j < length; j += 1) {
            // slope = (y1 - y0) / (x1 - x0)
            slope = (points[i].y - points[j].y) / (points[i].x - points[j].x);
            count = (occurrence[slope] || 0) + 1;
            occurrence[slope] = count;
            max = ((count > max) && count) || max; 
        }
        results[i] = max;
    }
    return Math.max(results);
};

module.exports = findMaxPoints;
