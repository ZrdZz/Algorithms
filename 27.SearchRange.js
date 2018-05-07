//给定一个升序数组, 再给定一个目标值, 找出目标值在数组中的start和end
//利用两次二分查找, 第一次找到左边界,第二次找到右边界 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0,
      right = nums.length - 1,
      result = [-1, -1];
  
  while(left <= right){
      let middle = Math.floor((left + right) / 2);
      
      if(nums[middle] < target){
          left = middle + 1;
      }else{
          right = middle - 1;
      }
  }
  
  if(nums[right + 1] !== target){
      return result
  }
  
  //先找到左边界
  result[0] = right + 1;
  
  right = nums.length - 1;
  while(left <= right){
      let middle = Math.floor((left + right) / 2);
      
      if(nums[middle] <= target){
          left = middle + 1;
      }else{
          right = middle - 1;
      }        
  }
  
  result[1] = left - 1;
  return result
};