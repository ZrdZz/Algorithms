//给定一个节点然后删除链表中的节点。
//这道题比较奇怪, 他没有给定链表, 只给了一个要删除的节点, 所以就无法得到前一个节点。
//这里可以让要删除的节点的值等于下一个节点的值, 然后删除下一个节点

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if(node === null){
        return 
    }
    node.val = node.next.val;
    node.next = node.next.next;
};