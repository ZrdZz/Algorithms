//给一个链表L0→L1→…→Ln-1→Ln, 重新排序L0→Ln→L1→Ln-1→L2→Ln-2→…

//这道题分为三部分, 首先将链表分为两半, 然后对后半部分进行排序, 最后合并链表

var reorderList = function(head) {
    if(head === null){
        return
    }
    
    //先利用快慢指针将数组分为两半
    let fast = head,
        slow = head;
    
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    //这里的意思是将前半部分链表的最后一个节点的next指向null, 与后半部分彻底断开
    let pre = slow;
    slow = slow.next;
    pre.next = null;

    //将后半部分逆序
    let node = null
    while(slow){
        //首先保存后一个节点
        let last = slow.next;
        slow.next = node;
        node = slow;
        slow = last;
    }

    //合并链表
    while(node){
        let next = head.next;
        head.next = node;
        node = node.next;
        head.next.next = next;
        head = next;
    }
}