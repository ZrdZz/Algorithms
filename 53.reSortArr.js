// 给定一个数组, 将其中的奇数放在前半部分, 偶数放在后半部分, 顺序不能变

function reOrderArray(array) {
    // 存放奇数
    let odd = []
    // 存放偶数
    let even = []
    
    array.forEach((n) => {
        n % 2 === 0 ? even.push(n) : odd.push(n)
    })
    
    for (let i = 0; i < array.length; i++) {
        if (odd.length) {
            array[i] = odd.shift()
        } else if (even.length) {
            array[i] = even.shift()
        }
    }
    return array
}