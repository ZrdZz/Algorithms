// 求1+2+3+...+n,要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句(A?B:C)

function Sum_Solution(n) {
  // 利用逻辑与的短路特性来终止递归
  // 注意这里要加括号
  n && (n += Sum_Solution(n - 1))
  return n
}