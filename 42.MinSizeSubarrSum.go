// 给定一数组, 元素为正, 求子数组之和大于等于给定值的最小长度

// 时间复杂度为O(n)
func minSubArrayLen(s int, nums []int) int {
	len := len(nums)
	left := 0
	right := 0
	sum := 0
	res := len + 1
	
	for right < len {
			for sum < s && right < len {
					sum += nums[right]
					right++
			}
			for sum >= s {
					if res > right - left {
							res = right - left
					}
					// 找出一个数组后, 将left左移一位, 并且数组和减去第一个值
					sum -= nums[left]
					left++
			} 
	}
	if res == len + 1 {
			res = 0
	}
	return res
}