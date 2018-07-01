// 寻找连续子数组的最大和

function FindGreatestSumOfSubArray(array) {
  if (!array.length) {
    return
  }

  let res = array[0]
  let total = array[0]

  for (let i = 1; i < array.length; i++) {
    // total用来记录连续子数组的和, 当total小于0以后, 重新开始累计
    if (total <= 0) {
      total = array[i]
    } else {
      total += array[i]
    }
    res = Math.max(total, res)
  }
  return res
}
console.log(FindGreatestSumOfSubArray([1,-2,2]))