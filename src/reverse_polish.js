/*jslint indent: 4, nomen:true, white:true, continue:true */
'use strict';

var reversePolish = function (data) {
    var operator, operand, i, currentEle,
        stack = [],
        parseOperator = {
            "+": function (x, y) { return y + x; },
            "-": function (x, y) { return y - x; },
            "*": function (x, y) { return y * x; },
            "/": function (x, y) { return Math.floor(y / x); }
        };
    
    for (i = 0; i < data.length; i += 1) {
        currentEle = data[i];

        operator = parseOperator[currentEle];
        if (typeof operator === "function") {
            if (stack.length < 2) {
                // no enough operand to perform an arithmetic operation
                throw new Error("invalid syntax: invalid occurence of " + currentEle);
            }
            stack.push(operator(stack.pop(), stack.pop()));
            continue;
        }
        // not an operator, push it to stack if it's an integer
        operand = parseInt(currentEle, 10);
        if (typeof operand !== "number") {
            throw new Error("invalid syntax: invalid number " + currentEle);
        }
        stack.push(operand);
    }

    if (stack.length !== 1) {
        throw new Error("invalid syntax: incorrect amount of operands");
    }
    return stack.pop();
};

module.exports = reversePolish;
