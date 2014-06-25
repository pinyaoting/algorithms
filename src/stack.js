/*jslint indent: 4, nomen:true, white:true */
'use strict';
var Stack, createStack;

Stack = function () {
    this.data = {};
    this.count = 0;
};

Stack.prototype = {
    push: function (item) {
        this.count += 1;
        this.data[this.count] = item;
    },
    pop: function () {
        var item = this.data[this.count];
        this.count -= 1;
        return item;
    }
};

createStack = function () {
    var _stackInstance = new Stack();
    return {
        push: function (item) {
            _stackInstance.push(item);
        },
        pop: function () {
            return _stackInstance.pop();
        }
    };
};

module.exports = createStack;
