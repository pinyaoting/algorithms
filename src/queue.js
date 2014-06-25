/*jslint indent: 4, nomen:true, white:true */
'use strict';
var Queue, createQueue;

Queue = function () {
    this.data = {};
    this.start = 0;
    this.end = 0;
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

createQueue = function () {
    var _queueInstance = new Queue();
    return {
        enqueue: function (item) {
            _queueInstance.enqueue(item);
        },
        dequeue: function () {
            return _queueInstance.dequeue();
        }
    };
};

module.exports = createQueue;
