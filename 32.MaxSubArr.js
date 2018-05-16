//给定一个数组, 找出其中和最大的连续子序列

//动态规划...还不太会
var maxSubArray = function(nums) {
    let temp = 0;
    let res = nums[0];
    for(let i = 0; i < nums.length; i++){
        temp = Math.max(nums[i], temp + nums[i]);
        res = Math.max(temp, res);
    }
    return res;
};