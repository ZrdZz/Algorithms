//下一个全排列
//比如说: 1,2,3的全排列是
//1,2,3    1,3,2
//2,1,3    2,3,1
//3,1,2    3,2,1

//举个例子: 6,5,4,8,7,5,1
//要找到下一个全排列, 要找到递增的位置, 即4;
//然后需要找到4后面比4大的最小数, 即5
//然后将两者交换, 最后将5后面的数按从小到大排

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
  
  //若当前排列为最后一个排列, 则返回第一个排列
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