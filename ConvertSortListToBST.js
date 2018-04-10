/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head === null){
        return head;
    }
    
    //算出链表长度
    let cur = head,
        len = 0;
    while(cur){
        len++;
        cur = cur.next;
    }
    
    function listToBST(start, end){
        if(end < start){
            return null
        }
        let middle = Math.floor((end + start) / 2);
    
        //左子树递归
        let left = listToBST(start, middle - 1);
    
        let root = new TreeNode(head.val);
        head = head.next;
        root.left = left;
    
        //右子树递归
        root.right = listToBST(middle + 1, end);
        return root
    }
    
    return listToBST(0, len - 1)
};
