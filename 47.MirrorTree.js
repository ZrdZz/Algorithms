// 二叉树镜像

// 递归
function Mirror(root) {
  if (root === null || !root.left && !root.right) {
    return root
  }
    
  let temp = root.left
  root.left = root.right
  root.right = temp
    
  if (root.left) {
    Mirror(root.left)
  }
  if (root.right) {
    Mirror(root.right)
  }
}

// 迭代(利用队列, 广度优先遍历)
function Mirror(root){
  if (root === null || !root.left && !root.right) {
    return root
  }
  
  let queue = [root]

  while (queue.length) {
      let node = queue.shift()
      let temp = node.left
      node.left = node.right
      node.right = temp
      
      if (node.left) {
          queue.push(node.left)
      }
      if (node.right) {
          queue.push(node.right)
      }
  }
}