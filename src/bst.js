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
        search: function (item) {
            return this._search(item);
        }.bind(this)
    };
};

BinarySearchTree.prototype = {
    _getClosest:  function (item) {
        var pivot = this.root;
        while (pivot) {
            if (item < pivot.data) {
                if (!pivot.left) {
                    return pivot;
                }
                pivot = pivot.left;
                continue;
            }

            if (item > pivot.data) {
                if (!pivot.right) {
                    return pivot;
                }
                pivot = pivot.right;
                continue;
            }

            if (item === pivot.data) {
                return pivot;
            }
        }
        return pivot;
    },
    _insert: function (item) {
        var closest = this._getClosest(item);
        if (!closest) {
            this.root = new TreeNode(item);
            return true;
        }
        if (item < closest.data) {
            closest.left = new TreeNode(item);
            return true;
        }
        if (item > closest.data) {
            closest.right = new TreeNode(item);
            return true;
        }
        return false;
    },
    _search: function (item) {
        var closest = this._getClosest(item);
        if (!closest || closest.data !== item) {
            return null;
        }
        return closest;
    }
};

module.exports = BinarySearchTree;
