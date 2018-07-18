// 合并两个单调递增的链表

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
    let dummy = new ListNode(0)
    let res = null
    
    if (pHead1 && pHead2) {
        if (pHead1.val > pHead2.val) {
            res = pHead2
        } else {
            res = pHead1
        }
    } else if (pHead1) {
        return pHead1
    } else {
        return pHead2
    }
    
    while (pHead1 && pHead2) {
        if (pHead1.val > pHead2.val) {
            dummy.next = pHead2
            pHead2 = pHead2.next
        } else {
            dummy.next = pHead1
            pHead1 = pHead1.next
        }
        dummy = dummy.next
    }
    
    if (pHead1) {
        dummy.next = pHead1
    }
    if (pHead2) {
        dummy.next = pHead2
    }
    return res
}