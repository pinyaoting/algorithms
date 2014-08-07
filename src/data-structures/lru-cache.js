/*jslint indent: 4, nomen:true, white:true */
'use strict';
var ListNode = require('./list-node.js'),
    LRUCache;

LRUCache = function (size) {
    this.capacity = size || 10;
    this.cache = {};
    this.head = this.tail = null;
    return {
        get: function (key) {
            return this._get(key);
        }.bind(this),
        set: function (key, value) {
            this._set(key, value);
        }.bind(this)
    };
};

LRUCache.prototype = {
    _get: function (key) {
        var hit = this.cache[key];
        if (!hit) {
            return -1;
        }
        this._updateCacheUsage(hit);
        return hit.value;
    },
    _set: function (key, value) {
        var hit = this.cache[key];
        // Case 1: update existing item in cache
        if (hit) {
            this.cache[key].value = value;
            return true;
        }

        // Case 2: cache is not yet reached 100% capacity
        if (this.capacity) {
            this.capacity -= 1;
            this.cache[key] = this._insert(key, value);
            return true;
        }
        
        // Case 3: 100% capacity of the cache is reached 
        delete this.cache[this.head.key];
        if (this.head.next) {
            this.head.next.prev = null;
        }
        this.head = this.head.next;
        this.cache[key] = this._insert(key, value);
        return true;
    },
    _insert: function (key, value) {
        // use doubly-linked-list to keep track of cache usage
        var hit = new ListNode(key, value, null, null);
        this._updateCacheUsage(hit);
        return hit;
    },
    _updateCacheUsage: function (target) {
        if (this.head && this.head === target && target.next) {
            this.head = target.next;
        }
        // remove target from linked-list
        if (target.prev) {
            target.prev.next = target.next;
        }
        if (target.next) {
            target.next.prev = target.prev;
        }
        // append target at the end of linked-list
        if (this.tail) {
            this.tail.next = target;
            target.prev = this.tail;
        }
        this.tail = target;
        // initialize head
        if (!this.head) {
            this.head = this.tail;
        }
    }
};

module.exports = LRUCache;
