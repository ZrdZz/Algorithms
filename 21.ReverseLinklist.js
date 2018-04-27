//反转一个链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null){
        return head
    }
    
    let node = null;
    
    while(head){
        let last = head.next;
        head.next = node;
        node = head;
        head = last;
    }
    return node
};