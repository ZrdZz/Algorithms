//一个n x n的二维矩阵表示一个图像，将图像顺时针旋转90度。要求in-place，所以就不能用额外的空间了。

//可以先以对角线为轴进行翻转, 然后在以中间竖轴进行翻转
//或者先以反对角线翻转, 再以中间水平轴翻转
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let len = matrix.length;
  //先以对角线为轴进行翻转
  for(let i = 0; i < len - 1; i++){
      for(let j = i + 1; j < len; j++){
          let temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
      }
  }
  //在以中间轴为轴翻转
  for(let i = 0; i < len; i++){
      for(let j = 0; j < len / 2; j++){
          let temp = matrix[i][j];
          matrix[i][j] = matrix[i][len - j - 1];
          matrix[i][len - j - 1] = temp;
      }
  }
};