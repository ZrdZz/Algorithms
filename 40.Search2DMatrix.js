// 给定一个有序的二维数组, 找出指定的值
// 有序、查找就可以用二分查找

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) {
      return false
  }

  // 数组扁平化
  let arr = matrix.reduce((a, b) => {
      return a.concat(b)
  })
  
  let left = 0,
      right = arr.length - 1;
  
  while(left <= right) {
      let middle = Math.floor((left + right) / 2)
      
      if (arr[middle] > target) {
          right = middle - 1
      } else if (arr[middle] < target) {
          left = middle + 1
      } else {
          return true
      }
  }
  return false
}