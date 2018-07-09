// 旋转数组中的最小值

function minNumberInRotateArray(rotateArray) {
  if (!rotateArray.length) {
    return 0
  }

  let start = 0,
    end = rotateArray.length - 1;
    
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
        
    // 说明mid右边是有序的
    if (rotateArray[mid] <= rotateArray[end]) {
      // 注意: 这里mid不能减一, 因为mid有可能就是最小值
      end = mid
    // 说明mid左边是有序的, 最小值在右边
    } else if (rotateArray[mid] > rotateArray[end]) {
      start = mid + 1
    }
  }
  return rotateArray[start];
}