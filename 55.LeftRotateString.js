// 左旋转字符串

function LeftRotateString(str, n) {
    let strArr = str.split('')
    let nStr = strArr.splice(0, n)
    strArr = strArr.reverse()
    nStr = nStr.reverse()
    
    let result = nStr.concat(strArr)
    result.reverse()
    result = result.join('')
    return result
}