// 计算Complete Tree的节点

// 利用栈来实现, 广度优先遍历

var countNodes = function(root) {
  if(!root){
      return 0
  }
  let stack = [root],
      count = 0;
  
  while(stack.length){
      let node = stack.pop()
      count++
      if(node.left){
          stack.push(node.left)
      }
      if(node.right){
          stack.push(node.right)
      }
  }
  return count
}

// 利用递归来实现

var countNodes = function(root) {
  if(!root){
      return 0
  }
  let c = 0
  count(root)
  return c
  
  function count(node){
      if(!node){
          return
      }
      c++
      if(node.left){
          count(node.left)
      }
      if(node.right){
          count(node.right)
      }
  }
}