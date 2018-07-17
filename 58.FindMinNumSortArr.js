// 给定一排序数组和一个值, 找出两个元素和为给定值且两元素乘积最小

function FindNumbersWithSum(array, sum) {
  let i = 0,
      j = array.length - 1;
  
  // 数组有序, 分别从前面和后面进行遍历
  while (i <= j) {
      // 找到的第一组就是最小的
      if (array[i] + array[j] === sum) {
          return [array[i], array[j]]
      }
      
      if (array[i] + array[j] > sum) {
          j--
      } else {
          i++
      }
  }
}