// 简化给定的绝对路径
// path = "/home/" => "/home"
// path = "/a/./b/../../c/" => "/c"

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  // 现将路径进行分割, 这样数组中不包含'/'
  let pathArr = path.split('/')
  let stack = []
  
  /**
   *  利用栈
   *  遇到'..'且stack不为空就弹出一个元素
   *  遇到'.'、'..'、''就continue
   *  其他字符全部push
   */
  for(let i = 0; i < pathArr.length; i++){
      let s = pathArr[i]
      if(s === '..' && stack.length > 0){
          stack.pop()
      }else if(s === '' || s === '.' || s === '..'){
          continue
      }else{
          stack.push(s)
      }
  }
  str = stack.join('/')
  return '/' + str
};