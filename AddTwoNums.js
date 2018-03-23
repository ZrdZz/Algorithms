//给两个非空链表且节点值为(0 ~ 9), 将各节点值分别相加, 若有进位则加到下一个节点
//例：
//(2 -> 4 -> 3) + (5 -> 6 -> 4)
//(7 -> 0 -> 8)

//主要难点在于进位, 可以通过Math.floor(sum / 10)得到进位, (sum % 10)得到余数
//还有一点需要注意, 在最后一个节点相加后, 有可能还有个进位1, 所以还要向结果添加一个节点

/**
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let n1 = l1,
        n2 = l2,
        dummyHead = new ListNode(0),
        carry = 0,
        //进位
        current = dummyHead;
    
    while(n1 !== null || n2 !== null){
        let x = n1 !== null ? n1.val : 0,
            y = n2 !== null ? n2.val : 0,
            sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        if(n1 !== null){
            n1 = n1.next;
        }
        if(n2 !== null){
            n2 = n2.next;
        }
        current = current.next;
    }
    if(carry === 1){
        current.next = new ListNode(1);
    }
    return dummyHead.next    
};