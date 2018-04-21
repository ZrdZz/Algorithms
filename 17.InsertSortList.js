//给定一个链表利用插入排序的原理进行排序
//插入排序就是将节点值分别与前面已经排好的值进行比较, 然后进行交换
//对于数组来说, 一般比较是从后往前进行比较; 但是在链表中很难向前回溯, 所以每次比较时都从头节点开始比较

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if(head === null){
        return head;
    }
    
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let p = head;
    while(p){
        if(p.next && p.val > p.next.val){
            let i = dummy;
            //找到要交换的节点
            //从头开始与p.next进行比较
            while(!(i.next.val > p.next.val)){
                   i = i.next;   
            }
            
            //交换节点
            let node = p.next;
            p.next = node.next;
            node.next = i.next;
            i.next = node;
            
            //p = p.next;这里不用移动p了, 因为上面交换节点时就已经交换了
        }else{
            p = p.next;
        }
    }
    return dummy.next
}