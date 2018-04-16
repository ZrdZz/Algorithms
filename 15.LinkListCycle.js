//给定一个链表, 有环则返回环的入口节点, 没有则返回null

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
var detectCycle = function(head) {
    if(head === null){
        return head
    }
    
    let fast = head,
        slow = head,
        result = head;
    
    //使用快慢指针
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        
        //假设此时相遇时走了X步
        if(fast === slow){
            break;
        }
    }
    
    //先判断fast是否为null, 为null则无环
    if(fast === null || fast.next === null){
        return null
    }
    
    //快指针每次两步, 慢指针每次一步, 所以第一次相遇时快减慢(2X - X = X), 即一圈为X步
    //假设入口前为M步, 此时慢指针在圈内走了(X - M)步, 还需走X - (X - M)即M步才能再次走到入口
    //所以现在让另一个节点从头开始与慢节点一起走直到相遇时刚好走到入口
    while(result !== slow){
        result = result.next;
        slow = slow.next;
    }
    
    return result
}