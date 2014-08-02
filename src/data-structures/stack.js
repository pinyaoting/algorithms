/*jslint indent: 4, nomen:true, white:true */
'use strict';
var Stack;

Stack = function () {
    this.data = {};
    this.count = 0;
    return {
        push: function (item) {
            this._push(item);
        }.bind(this),
        pop: function () {
            return this._pop();
        }.bind(this)
    };
};

Stack.prototype = {
    _push: function (item) {
        this.count += 1;
        this.data[this.count] = item;
    },
    _pop: function () {
        var item = this.data[this.count];
        this.count -= 1;
        return item;
    }
};

module.exports = Stack;
