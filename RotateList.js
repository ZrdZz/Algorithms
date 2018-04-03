//将链表向右旋转k个节点
//1->2->3->4->5->NULL and k = 2    ====>    4->5->1->2->3->NULL

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let fast = head,
        slow = head;

    if(head === null){
        return head
    }

    //利用快慢指针法找到翻转的节点
    for(let i = 0; i < k; i++){
        //当k大于链表长度时, fast重新走
        if(fast === null){
            fast = head;
        }
        fast = fast.next;
    }
    
    //这里做个判断, 否则下面fast.next出错
    if(fast === null){
        return head
    }
    
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    
    //将链表尾接到链表头
    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head
}