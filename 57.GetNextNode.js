// 按照中序遍历顺序找到指定节点的下一个节点并返回
// 1.二叉树为空,则返回空
// 2.节点右孩子存在,则设置一个指针从该节点的右孩子出发,一直沿着指向左子结点的指针找到的叶子节点即为下一个节点 
// 3.节点不是根节点。如果该节点是其父节点的左孩子,则返回父节点; 否则继续向上遍历其父节点的父节点,重复之前的判断,返回结果

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode) {
    if (pNode === null) {
        return null
    }
    
    // 先判断节点的右节点是否存在, 若存在则找到他的最左边的节点
    if (pNode.right) {
        let node = pNode.right
        
        while (node.left) {
            node = node.left
        }
        return node
    }
    // 节点不是根节点
    while (pNode.next) {
        let node = pNode.next
        
        // 若想等说明pNode为左子节点, 直接输出他的父节点
        if (node.left === pNode) {
            return node
        }
        pNode = node
    }
    return null
}