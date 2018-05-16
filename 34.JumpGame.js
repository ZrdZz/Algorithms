//给定一个非负数组, 数组中的每个元素表示从该位置可以跳出的最远距离, 要求从第一个元素开始能否到达最后一个元素

//利用贪心算法, 计算每个点能够跳出的最大距离

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if(nums.length < 1){
      return false;
  }
  if(nums.length === 1){
      return true;
  }
  let max = 0;
  for(let i = 0;i < nums.length; i++){
      max = Math.max(max, i + nums[i]);
      //如果小于说明当前点为0
      if(max < i + 1){
          return false;
      }
      if(max >= nums.length - 1){
          return true
      }
  }
};