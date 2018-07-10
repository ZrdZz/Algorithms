// 找出有环链表的入口节点

function EntryNodeOfLoop(pHead) {
    let fast = pHead,
        slow = pHead;

    // fast走了2x步, slow走了x步(因为fast每次比slow多走一步), 2x = x + rn(r为圈数, n为一圈的长度), x = rn
    // 所以slow相当于走了r圈
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        
        if (fast === slow) {
            fast = pHead
            // fast回到头结点, 假设头结点到入口节点长为y, x - y为slow除链表开头y在环中走的距离, slow再走y步就能与fast相遇
            while (fast !== slow) {
                fast = fast.next
                slow = slow.next
            }
            return fast
        }
    }
}