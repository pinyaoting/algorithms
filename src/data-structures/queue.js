/*jslint indent: 4, nomen:true, white:true */
'use strict';
var Queue;

Queue = function () {
    this.data = {};
    this.start = 0;
    this.end = 0;
    return {
        enqueue: function (item) {
            this.enqueue(item);
        }.bind(this),
        dequeue: function () {
            return this.dequeue();
        }.bind(this)
    };
};

Queue.prototype = {
    enqueue: function (item) {
        this.data[this.end] = item;
        this.end += 1;
    },
    dequeue: function () {
        if (this.start === this.end) {
            // index out of bound
            return undefined;
        }
        var item = this.data[this.start];
        this.start += 1;
        return item;
    }
};

module.exports = Queue;
