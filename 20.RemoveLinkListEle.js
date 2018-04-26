//删除链表中指定值得节点

//对于头节点来说可以指定一个辅助节点, 这样和非头节点就没什么区别了

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let helpHead = new ListNode(0);  
    helpHead.next = head;  
    let cursor = helpHead;  
    while (cursor.next != null) {  
        if (cursor.next.val == val) {  
            cursor.next = cursor.next.next;  
        } else {  
            cursor = cursor.next;  
        }   
    }  
    return helpHead.next;  
}