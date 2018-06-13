// 给一个二叉搜索树, 找出其中第K大的节点

// 使用中序遍历将节点值放入数组
var kthSmallest = function(root, k) {
  if(!root){
      return
  }

  let arr = []
  convertArr(root)
  return arr[k - 1]
  // 递归
  function convertArr(node) {
      if(!node){
          return
      }
      convertArr(node.left)
      arr.push(node.val)
      convertArr(node.right)
  }
}

// 一种更简单的方法, 不用遍历所有数组
var kthSmallest = function(root, k) {
  if(!root){
      return
  }

  let res = 0,
      countNode = 0;
  
  count(root)
  
  return res
  
  function count(node){
      if(node){
          count(node.left)
          
          countNode++
          if(countNode === k){
              res = node.val
          }
          
          count(node.right)
      }
  }
}