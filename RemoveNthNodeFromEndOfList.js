//给一个链表, 删除倒数第n个节点, 并返回头结点

//使用快慢指针法, 设置一个快指针和一个慢指针都指向头结点, 先让快指针跑n步, 慢指针再跑, 当快指针到达终点时, 慢指针的next就是要删除的节点了。

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     let fast = head,
//         slow = head;
    
//     for(let i = 0; i < n; i++){
//         fast = fast.next;
//     }
    
//     while(fast.next !== null){
//         fast = fast.next;
//         slow = slow.next;
//     }
    
//     slow.next = slow.next.next;
    
//     return head
// }

//注意上面方法中, 若链表长度为n, 删除倒数第n个节点, 这时快指针就指向null了

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy,
        slow = dummy;
    
    if(head === null){
        return null
    }
    
    for(let i = 0; i < n; i++){
        fast = fast.next;
    }
    
    while(fast.next !== null){
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    return dummy.next
}