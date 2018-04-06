//给定一个链表, 比给定值X大于或等于放在左边, 小于放在右边, 且相对位置不变

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(head === null){
        return head
    }
    
    let dummyLeft = new ListNode(0),
        left = dummyLeft;
    
    let dummyRight = new ListNode(0),
        right = dummyRight;
    
    //比x小的放在left中, 大的放在right中
    while(head){
        if(head.val < x){
            dummyLeft.next = head;
            dummyLeft = dummyLeft.next;
            head = head.next
        }else{
            dummyRight.next = head;
            dummyRight = dummyRight.next;
            head = head.next;
        }
    }
    
    dummyRight.next = null;
    dummyLeft.next = right.next;
    return left.next
}