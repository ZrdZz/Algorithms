// 求二叉树的深度

// 递归, 分别计算每一条路径, 要进行回溯, 注意回溯时长度要减一
function TreeDepth(pRoot) {
  if (!pRoot) {
      return 0
  }
  if (pRoot && !pRoot.left && !pRoot.right) {
      return 1
  }
  let res = 0
  let len = 1
  
  calDeep(pRoot)
  return res
  
  function calDeep(node) {
    if (node.left) {
      len++
      res = Math.max(res, len)
      calDeep(node.left)
    }
    if (node.right) {
      len++
      res = Math.max(res, len)
      calDeep(node.right)
    }
    len--
  }
}

// 另一种递归
function TreeDepth(pRoot) {
  if(!pRoot) return 0
  let left = 1 + TreeDepth(pRoot.left)
  let right = 1+ TreeDepth(pRoot.right)
  return Math.max(left, right)
}

// 迭代
function TreeDepth(pRoot) {
  if (!pRoot) {
    return 0
  }

  let queue = [pRoot]
  let depth = 0
  let count = 0
  let nextCount = 1

  while (queue.length) {
    let node = queue.shift()
    count++

    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
    // 每一次相等时, 每一层节点都已从队列中取出
    if (count === nextCount) {
      count = 0
      nextCount = queue.length
      depth++
    }
  }
  return depth
}