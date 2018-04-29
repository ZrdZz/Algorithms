//判断链表是否是回文

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null){
        return true
    }
    
    let fast = head,
        slow = head,
        stack = [];
    
    stack.push(head);
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        stack.push(slow);
    }
    //往数组里放的时候会多放一个, 所以这里要先弹出一个
    stack.pop();
    //用于判断是偶数个节点还是奇数个节点, 若是则为奇数个节点, 此时slow要向后移一位来跳过中间的数
    if(fast){
       slow = slow.next; 
    }
    
    while(slow){
        if(slow.val !== stack.pop().val){
            return false
        }else{
            slow = slow.next;
        }
    }
    return true
}

//第二种方法, 将后半部分链表翻转, 进行比较
var isPalindrome = function(head) {
    if(head === null){
        return true
    }
    
    let fast = head.next,
        slow = head;
    
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    let middle = slow.next;
        slow.next = null;
    
    let node = null;
    
    while(middle){
        let last = middle.next;
        middle.next = node;
        node = middle;
        middle = last;
    }
    
    while(node){
        if(node.val !== head.val){
            return false
        }
        node = node.next;
        head = head.next;
    }
    return true
}