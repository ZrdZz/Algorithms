//从一个部分翻转的数组中找出指定的值, 数组中没有重复的值

//主要考查的是二分查找
var search = function(nums, target) { 
  let left = 0,
      right = nums.length - 1;
  
  while(left <= right){
      let middle = Math.floor((left + right) / 2);
      if(nums[middle] === target){
          return middle
          //如果nums[middle]<nums[right]说明m到r是有序的
      }else if(nums[middle] < nums[right]){
          //在判断target是否在m和r之间, 若是则l=m+1否则r=m-1
          if(target <= nums[right] && target > nums[middle]){
              left = middle + 1;
          }else{
              right = middle - 1;
          }
      }else{
          //说明l到m是有序的
          //在判断target是否在m和l之间, 若是则r=m-1否则l=m+1
          if(target >= nums[left] && target < nums[middle]){
              right = middle - 1;
          }else{
              left = middle + 1;
          }
      }
  }
  return -1
}
