/*jslint indent: 4, nomen:true, white:true */
'use strict';
var Heap;

Heap = function (numbers) {
    var i;
    this.numbers = numbers || [];
    if (this.numbers.length > 1) {
        for (i = Math.floor(this.numbers.length / 2) - 1; i >= 0; i -= 1) {
            this._maxHeapify(i);
        }
    }
    return {
        add: function (number) {
            return this._add(number);
        }.bind(this),
        search: function (number) {
            return this._search(number);
        }.bind(this),
        remove: function (number) {
            return this._remove(number);
        }.bind(this),
        print: function () {
            return this._print();
        }.bind(this)
    };
};

Heap.prototype = {
    _maxHeapify: function (index) {
        var leftChildIndex = 2 * index + 1,
            rightChildIndex = leftChildIndex + 1,
            parentValue = this.numbers[index],
            leftChildValue = this.numbers[leftChildIndex] || Number.NEGATIVE_INFINITY,
            rightChildValue = this.numbers[rightChildIndex] || Number.NEGATIVE_INFINITY,
            maxValue = Math.max(parentValue, leftChildValue, rightChildValue);
        
        if (maxValue === parentValue) {
            return;
        }
        if (maxValue === leftChildValue) {
            this.numbers[leftChildIndex] = parentValue;
            this.numbers[index] = maxValue;
            this._maxHeapify(leftChildIndex);
            return;
        }
        if (maxValue === rightChildValue) {
            this.numbers[rightChildIndex] = parentValue;
            this.numbers[index] = maxValue;
            this._maxHeapify(rightChildIndex);
            return;
        }
    },
    _add: function (number) {
        this.numbers.unshift(number);
        this._maxHeapify(0);
    },
    _search: function (number, index) {
        if (typeof number !== 'number') {
            return false;
        }
        var currentIndex = index || 0,
            currentValue = this.numbers[currentIndex],
            leftChildIndex,
            leftChildValue,
            rightChildIndex,
            rightChildValue,
            leftResult;

        if (number > currentValue) {
            return false;
        }
        if (number === currentValue) {
            return currentIndex;
        }

        leftChildIndex = 2 * currentIndex + 1;
        rightChildIndex = leftChildIndex + 1;
        leftChildValue = this.numbers[leftChildIndex] || Number.NEGATIVE_INFINITY;
        rightChildValue = this.numbers[rightChildIndex] || Number.NEGATIVE_INFINITY;
        if (number === leftChildValue) {
            return leftChildIndex;
        }
        if (number === rightChildValue) {
            return rightChildIndex;
        }
        if (number > leftChildValue && number > rightChildValue) {
            return false;
        }
        leftResult = this._search(number, leftChildIndex);
        if (leftResult === false) {
            return this._search(number, rightChildIndex);
        }
        if (leftResult !== false){
            return leftResult;
        }
    },
    _remove: function (number) {
        if (typeof number !== 'number') {
            return false;
        }
        var index = this._search(number, 0);
        if (index === false) {
            return false;
        }
        this.numbers[index] = this.numbers.pop();
        this._maxHeapify(index);
        return true;
    },
    _print: function () {
        return this.numbers;
    }
};

module.exports = Heap;
