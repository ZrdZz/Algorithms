//给定一个升序无重复数组, 再给定一个目标值, 若存在则返回index, 不存在则插入, 返回对应的index

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index = nums.indexOf(target),
    result = 0;
  
  if(index !== -1){
    return index
  }
  
  // 从后面开始遍历, 若大于, 则向后移动数字
  for(let i = nums.length - 1; i >= 0; i--){
    if(nums[i] > target){
      nums[i + 1] = nums[i];
    }else{
      nums[i + 1] = target;
      result = i + 1;
      break;
    }
  }
  return result
};