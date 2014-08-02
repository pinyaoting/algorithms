/*jslint indent: 4, nomen:true, white:true, continue:true */
'use strict';

var DFS;

DFS = function () {
    this.callStack = [];
    this.resultStack = [];
};

DFS.prototype = {
    _inOrderTraversal: function (root, getLeft, getRight) {
        var curr = root;
        do {
            if (curr !== undefined) {
                this.callStack.push(curr);
                curr = getLeft(curr);
                continue;
            }
            if (this.callStack.length === 0) {
                return;
            }
            curr = this.callStack.pop();
            this.resultStack.push(curr);
            curr = getRight(curr);
        } while (this.callStack.length > 0);
    },
    _traverse: function (root, getLeft, getRight, op) {
        var curr, left, right;
        this.callStack.push(root);
        while (this.callStack.length > 0) {
            curr = this.callStack.pop();
            this.resultStack[op](curr); 
            right = getRight(curr);
            left = getLeft(curr);
            if (right) {
                this.callStack.push(right);
            }
            if (left) {
                this.callStack.push(left);
            }
        }
        return this.resultStack;
    },
    _preOrderTraversal: function (root, getLeft, getRight) {
        return this._traverse(root, getLeft, getRight, 'unshift');
    },
    _postOrderTraversal: function (root, getLeft, getRight) {
        return this._traverse(root, getLeft, getRight, 'push');
    }
};
