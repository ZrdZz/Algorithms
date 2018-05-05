/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let len = nums.length,
      index = len - 1;
  
  while(nums[index] <= nums[index - 1]){
      index--;
  }
  
  if(index === 0){
      nums.sort((a, b) => a - b);
      return
  }
  
  let swap;
  for(let i = len - 1; i >= index; i--){
      if(nums[i] > nums[index - 1]){
          swap = i;
          break;
      }
  }
  
  let temp = nums[index - 1];
  nums[index - 1] = nums[swap];
  nums[swap] = temp
  
  let arr = nums.splice(index, nums.length - index);
  arr.sort((a, b) => a - b);
  nums.push(...arr)
}