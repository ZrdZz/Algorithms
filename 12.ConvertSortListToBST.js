//将有序链表转换为二叉搜索树
//二叉搜索树左子树小于根节点, 右子树大于根节点, 子树也符合这个规律
//BST中序遍历后变为有序链表

//先找出链表中节点, 这就是树的根节点, 在分别遍历链表的左右部分, 找出各自的中节点......

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
        //注意这里不能<=
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
