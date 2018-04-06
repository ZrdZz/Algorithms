//从链表中删除节点
//1->1->2, return 1->2

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = head,
        cur = head;
    
    if(head === null){
        return head
    }
    
    while(cur){
        //先通过循环跳过相等的节点
        while(cur.next && cur.val === cur.next.val){
            cur = cur.next;
        }
        
        //这个判断用于判断是否到最后一个节点, 到了的话将最后一个节点设为null
        if(cur.next){
            dummy.next = cur.next;
            dummy = dummy.next;
            cur = cur.next;
        }else{
            dummy.next = null;
            return head
        }
    }
}