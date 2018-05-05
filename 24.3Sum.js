//在一个数组中找3个值, 使其相加等于0

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    //先对数组进行排序
    let arr = sort(nums);

    let result = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        //因为数组已排好序, 所以若第一个值大于0, 则后面的值肯定不会小于0
        if (arr[i] > 0) {
            break;
        }

        while (arr[i] === arr[i - 1]) {
            i++;
        }

        //找剩余的两个数
        let s = i + 1,
            e = arr.length - 1;
        while (s < e) {
            let target = -arr[i];
            if (arr[s] + arr[e] === target) {
                let res = [arr[i], arr[s], arr[e]];
                result.push(res);
                while (s < e && arr[s] === arr[s + 1]) {
                    s++;
                }
                while (s < e && arr[e] === arr[e - 1]) {
                    e--;
                }
                s++;
                e--;
            } else if (arr[s] + arr[e] > target) {
                e--;
            } else {
                s++;
            }
        }
    }
    return result
};

function sort(array) {
    if (array.length < 2) {
        return array
    }

    let left = [],
        right = [];

    let middleIndex = Math.floor(array.length / 2),
        middle = array.splice(middleIndex, 1)[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > middle) {
            right.push(array[i])
        } else {
            left.push(array[i])
        }
    }
    return sort(left).concat(middle, sort(right))
}