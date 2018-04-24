//给定两个链表, 找出他们交叉的节点, 若没有则返回null

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null){
        return null
    }
    let dummyA = headA,
        dummyB = headB;
    
    let Acount = 0,
        Bcount = 0;
    
    //先计算出两个链表的长度
    while(dummyA){
        Acount++;
        dummyA = dummyA.next;
    }
    while(dummyB){
        Bcount++;
        dummyB = dummyB.next;
    }
    
    //若两个链表有交叉结点的话, 则从交叉节点开始到链表尾一定重合
    //先让长链表移动相差的节点数
    if(Acount - Bcount > 0){
        let moveA = Acount - Bcount;
        while(moveA > 0){
            headA = headA.next;
            moveA--;
        }
    }else{
        let moveB = Bcount - Acount;
        while(moveB > 0){
            headB = headB.next;
            moveB--;
        }        
    }
    
    //两链表同时移动, 只要找到一个相同节点就可返回
    while(headA && headB && headA !== headB){
        headA = headA.next;
        headB = headB.next;
    }
    
    //若headA不为null的话, 说明有交叉节点, 为null,说明直到最后都没找到相等节点
    return headA ? headA : null;
}