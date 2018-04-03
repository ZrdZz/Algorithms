//从链表中删除重复节点
//1->2->3->3->4->4->5, return 1->2->5

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null) return null;
    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    let cur = head;
    while(cur !== null){
        while(cur.next !== null && cur.val === cur.next.val){
            cur = cur.next;
        }
        
        //如果相等,说明cur指针没有移动,也就是说当前值没有重复值, 就移动pre将值加入输出链表中
        if(pre.next === cur){
            pre = pre.next;
        }else{
            //不相等, 说明有重复值, 利用pre.next来跨过这些值
            pre.next = cur.next;
        }
        cur = cur.next;
    }
    return dummy.next;
}