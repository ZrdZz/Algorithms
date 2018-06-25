// 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法

// B0    1  A1  A2  ...  An-2  An-1
// B1    A0  1  A2  ...  An-2  An-1  
// B2    A0 A1   1  ...  An-2  An-1 
// ...   A0 A1  ...  1   An-2  An-1 
// Bn-2  A0 A1  ... An-3   1   An-1 
// Bn-1  A0 A1  ... An-3 An-2    1

function multiply(array) {
    if (!array.length) {
        return
    }
    
    let res = []
    res[0] = 1
    // 先计算下三角
    for (let i = 1; i < array.length; i++) {
        res[i] = array[i - 1] * res[i - 1]
    }
    let temp = 1
    // 在计算上三角
    for (let i = array.length - 2; i >= 0; i--) {
        temp *= array[i + 1]
        res[i] *= temp
    }
    return res
}