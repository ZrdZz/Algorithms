//给定一个链表判断是否有环

//使用快慢指针法, 若有环就会相遇

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head,
        slow = head;
    if(head === null){
        return false
    } 
    
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow){
            return true
        }
    }
    return false
}