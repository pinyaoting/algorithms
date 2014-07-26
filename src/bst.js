/*jslint indent: 4, nomen:true, white:true, continue:true */
'use strict';
var TreeNode = require('./treenode.js'),
    BinarySearchTree;

BinarySearchTree = function () {
    this.root = null;
    return {
        insert: function (item) {
            return this._insert(item);
        }.bind(this),
        remove: function (item) {
            return this._remove(item);
        }.bind(this),
        search: function (item) {
            return this._search(item);
        }.bind(this)
    };
};

BinarySearchTree.prototype = {
    _traverse: function (item, searchForParent) {
        var pivot = this.root;
        while (pivot) {
            if (item === pivot.data) {
                return pivot;
            }
            if (item < pivot.data) {
                if (searchForParent && (!pivot.left || item === pivot.left.data)) {
                    return pivot;
                }
                pivot = pivot.left;
                continue;
            }

            if (item > pivot.data) {
                if (searchForParent && (!pivot.right || item === pivot.right.data)) {
                    return pivot;
                }
                pivot = pivot.right;
                continue;
            }
        }
        return pivot;
    },
    _insert: function (item) {
        var ancestor = this._traverse(item, true);
        if (!ancestor) {
            this.root = new TreeNode(item);
            return true;
        }
        if (item < ancestor.data) {
            if (ancestor.left) {
                return false; // duplicate entry
            }
            ancestor.left = new TreeNode(item);
            return true;
        }
        if (item > ancestor.data) {
            if (ancestor.right) {
                return false; // duplicate entry
            }
            ancestor.right = new TreeNode(item);
            return true;
        }
        return false;
    },
    _search: function (item) {
        return this._traverse(item, false);
    },
    _remove: function (item) {
        var target,
            child,
            pivot,
            ancestor = this._traverse(item, true);

        if (!ancestor) {
            return false;
        }
        if (item < ancestor.data) {
            if (ancestor.left) {
                target = ancestor.left;
                child = 'left';
            }
        }
        if (item > ancestor.data) {
            if (ancestor.right) {
                target = ancestor.right;
                child = 'right';
            }
        }

        // case 1: target has no children, return directly after removal
        if (!target.left && !target.right) {
            ancestor[child] = null;
            return true;
        }
        // case 2: target has one sub-tree
        if (target.left && !target.right) {
            ancestor[child] = target.left;
            return true;
        }
        if (!target.left && target.right) {
            ancestor[child] = target.right;
            return true;
        }
        // case 3: target has both subtree
        if (target.left && target.right) {
            // swap with the rightmost element of left subtree, then recursively delete 
            pivot = target.left;
            while (pivot.right) {
                ancestor = pivot;
                pivot = pivot.right;
            }
            target.data = pivot.data;
            if (pivot.left) {
                ancestor.right = pivot.left;
            }
        }
    }
};

module.exports = BinarySearchTree;
