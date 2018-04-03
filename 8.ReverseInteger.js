//翻转一个数字(也可以用来求数字的回文)

//有两种方法, 第一种纯粹使用js的字符串、数组方法
//第二种主要通过一个循环实现

//主要有两点需要注意: 一是数字的正负, 而是数字翻转后的前导0

//第一种方法可以通过正则表达式去除
//第二种方法若数字后面有0的话, res就一直为0, 直到不为0

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = Math.abs(x),
        str = num.toString(),
        strArr = str.split('');
    
    let reverseArr = strArr.reverse(),
        reverseStr = reverseArr.join('');
    
    return x > 0 ? +reverseStr.replace(/^(0+)/g, '') : -reverseStr.replace(/^(0+)/g, '')
};

var reverse = function(x) {
    let num = Math.abs(x);
    let res = 0;
    
    while(num){
        res = res * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    
    return x > 0 ? res : -res
};