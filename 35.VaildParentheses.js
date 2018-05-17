//给定一个包含'(', ')', '{', '}', '[', ']'的字符串, 判断这些括号是否匹配
//可以通过栈来判断

//先往栈中放入第一个字符
//从第二个字符开始依次与栈顶元素进行比较, 匹配则出栈, 不匹配则入栈
//最后判断栈是否为空, 为空则匹配, 不为空则不匹配

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s === ''){
      return true;
  }
  let stack = [s[0]];
  
  for(let i = 1; i < s.length; i++){
      if(stack.length && ((stack[stack.length - 1] === '(' && s[i] === ')') || (stack[stack.length - 1] === '[' && s[i] === ']') ||                       (stack[stack.length - 1] === '{' && s[i] === '}'))){
          stack.pop();
      }else{
          stack.push(s[i]);
      }
  }
  return stack.length > 0 ? false : true;
};