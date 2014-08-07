/*jslint indent: 4, nomen:true, white:true, continue:true */
'use strict';
var ListNode;

ListNode = function (k, v, p, n) {
    this.key = k;
    this.value = v;
    this.prev = p;
    this.next = n;
};

module.exports = ListNode;
