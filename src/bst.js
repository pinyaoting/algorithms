/*jslint indent: 4, nomen:true, white:true, continue:true */
'use strict';
var Node, BinarySearchTree, createBST;

Node = function (item) {
    this.data = item;
    this.left = null;
    this.right = null;
};

BinarySearchTree = function () {
    this.root = null;
};

BinarySearchTree.prototype = {
    getClosest:  function (item) {
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
    insert: function (item) {
        var closest = this.getClosest(item);
        if (!closest) {
            this.root = new Node(item);
            return true;
        }
        if (item < closest.data) {
            closest.left = new Node(item);
            return true;
        }
        if (item > closest.data) {
            closest.right = new Node(item);
            return true;
        }
        return false;
    },
    search: function (item) {
        var closest = this.getClosest(item);
        if (!closest || closest.data !== item) {
            return null;
        }
        return closest;
    }
};

createBST = function () {
    var _bst = new BinarySearchTree();
    return {
        insert: function (item) {
            return _bst.insert(item);
        },
        search: function (item) {
            return _bst.search(item);
        }
    };
};

module.exports = createBST;
