// 给定一个有序升序的数组(有重复值), 数组在某个点上会旋转, 找指定值

// 使用二分查找, 通过判断middle和边缘元素, 可以判断哪一半不受rotate影响; 因为允许重复, 当碰到中间和边缘相等时, 就不知道哪边有序了
// 所以可以让一边移动直到边缘和中间不在相等或者相遇

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  if (nums.length === 0) {
      return false 
  }
  let left = 0,
      right = nums.length - 1;
  
  while(left <= right){
      let middle = Math.floor((left + right) / 2)
      if (nums[middle] === target) {
          return true 
      }
      if (nums[middle] > nums[left]) {
          if (nums[middle] > target && nums[left] <= target) {
              right = middle - 1 
          } else {
              left = middle + 1
          }
      } else if (nums[middle] < nums[left]) {
          if(nums[middle] < target && nums[right] >= target) {
              left = middle + 1
          } else {
              right = middle - 1
          }
      } else {
          left++
      }
  }
  return false
}