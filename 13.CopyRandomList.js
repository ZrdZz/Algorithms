//给定一个链表, 每个节点包含一个额外的随机指针指向链表上的节点或null, 返回一个链表的复制

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    let dummy = new RandomListNode(0),
        node = head;
    if(head === null){
        return head
    }
    
    //用map存储出现过的节点, 出现过则直接指向, 没有出现过则创建
    let map = new Map();
    
    while(head){
        if(!map.has(head)){
            //map中没有记录则添加
            map.set(head, new RandomListNode(head.label));
        }
        dummy.next = map.get(head);
        
        //map中没有随机节点则添加
        if(head.random && !map.has(head.random)){
            map.set(head.random, new RandomListNode(head.random.label));
        }

        //随机节点可能为null, 这时取出的值为undefined, 所以应设为null
        dummy.next.random = map.get(head.random) || null;
        dummy = dummy.next;
        head = head.next;
    }    
    return map.get(node)  
}