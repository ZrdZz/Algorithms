//  斐波那契数列

function Fib1(n) {
  if (n <= 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return Fib1(n - 1) + Fib1(n - 2)
}

function Fib2(n) {
  if (n <= 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  
  let num1 = 0
  let num2 = 1
  let add = 1
  for (let i = 2; i <= n; i++) {
    add = num1 + num2
    num1 = num2
    num2 = add
  }
  return add
}
console.log(Fib1(10) === Fib2(10))