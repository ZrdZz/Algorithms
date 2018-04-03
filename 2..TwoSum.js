//给你个整数数组, 从中找出两个数使得他们的和等于目标数,假设每个目标数只有一个解并且不能多次使用同一个元素

//最简单的办法就是通过两次循环来找出两个数

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0, len = nums.length; i < len; i++){
        for(let j = i + 1; j < len; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    return
};


//还可以将数组元素的value和index存在对象中, 这样每循环一个数先看它的补数是否在对象中,若在则输出结果,否则保存在对象中

var twoSum = function(nums, target) {
    let obj = {};
    for(let i = 0, len = nums.length; i < len; i++){
        let complement = target - nums[i];
        if(obj[complement]){
            return [obj[complement], i];
        }
        obj[nums[i]] = i;
    }
}