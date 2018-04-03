//合并两个排好序的链表

//有一个需要注意的地方, 当把一个链表的节点拼接到后面后, 只往后移动这个链表, 另一个链表不往后移动

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(0),
        newLinked = dummy;
    
    while(l1 && l2){
        if(l1.val < l2.val){
            dummy.next = l1;
            l1 = l1.next;
        }else{
            dummy.next = l2;
            l2 = l2.next;
        }      
        dummy = dummy.next;
    }
    
    if(l1){
        dummy.next = l1;
    }
    if(l2){
        dummy.next = l2;
    }

    return newLinked.next
}


//比较好的递归写法
var mergeTwoLists = function(l1, l2) {
    if(l1 === null){
        return l2
    }
    
    if(l2 === null){
        return l1
    }
    
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2); 
        return l1
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};