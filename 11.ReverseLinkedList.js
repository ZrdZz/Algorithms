//反转链表从位置m到n
//Given 1->2->3->4->5->NULL, m = 2 and n = 4
//return 1->4->3->2->5->NULL

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(head === null){
        return head
    }
    
    let dummy = new ListNode(0);
    dummy.next = head;
    
    //先找到翻转部分的前一个节点并保存
    for(let i = 1; i < m; i++){
        if(dummy.next){
            dummy = dummy.next;
        }else{
            return head
        }
    }
    
    //保存翻转部分的前一个节点
    let preStart = dummy,
        //保存翻转部分的第一个节点
        start = dummy.next,
        dummyNode = dummy.next,
        node = null;
    
    dummy = dummy.next;
    for(let i = m; i <= n; i++){
        dummyNode = dummy;
        dummy = dummy.next;
        dummyNode.next = node;
        node = dummyNode;
    }
    //将反转链表前后进行连接
    preStart.next = node;
    start.next = dummy;

    //若m=1则head此时不会指向头结点
    return m === 1 ? preStart.next : head
}