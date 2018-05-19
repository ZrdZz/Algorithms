//给定一个整数, 找出组合括号的个数
//例:
//n = 3
//["((()))", "(()())", "(())()", "()(())", "()()()"]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [];
  
  addParenthesis('', n, 0);
  return result;
  
  function addParenthesis(str, left, right){
      if(left === 0 && right === 0){
          return result.push(str);
      }
      if(left > 0){
          addParenthesis(str + '(', left - 1, right + 1);
      }
      if(right > 0){
          addParenthesis(str + ')', left, right - 1);
      }
  }
};