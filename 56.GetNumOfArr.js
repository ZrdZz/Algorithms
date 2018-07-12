// 统计一个数字在排序数组中出现的次数

function GetNumberOfK(data, k) {
    let index = data.indexOf(k)
    let count = 0
    
    while (data[index] === k) {
        count++
        index++
    }
    return count
}