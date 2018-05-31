// 给定一个字符串, 判断回文, 忽略大小写, 只考虑数字字母字符

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // 过滤掉标点符号、空格
  s = s.replace(/[^\w]/g, '').toLowerCase()
  let middle = (s.length - 1) / 2
  for(let i = 0; i < middle; i++) {
      let left = s[i]
      let right = s[s.length - i - 1]
      if(left !== right){
          return false
      }
  }
  return true
}