var sortList = function(head) {
    if(head === null || head.next === null){
        return head
    }
    
    let fast = head,
        slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    let left = head,
        right = slow.next;
    
    //将链表分为两部分,然后前半部分的末尾指向null和后半部分分开
    slow.next = null;
    
    return merge(sortList(left), sortList(right))
};

var merge = function(left, right){
    let result = new ListNode(0),
        dummy = result;
    
    while(left && right){
        if(left > right){
            dummy.next = right;
            right = right.next;
            dummy = dummy.next;
        }else{
            dummy.next = left;
            left = left.next;
            dummy = dummy.next;
        }
    }
    while(left){
        dummy.next = left;
        dummy = dummy.next;
        left = left.next;
    }
    while(right){
        dummy.next = right;
        dummy = dummy.next;
        right = right.next;
    }
    return result.next
}