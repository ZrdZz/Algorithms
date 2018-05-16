//螺旋输出一个矩阵

var spiralOrder = function(matrix) {
    if(matrix.length === 0){
      return [];
    }
    if(matrix[0].length === 0){
      return [];
    }
    let row = matrix.length,
        col = matrix[0].length,
        result = [];
    
    let r = 0,
        c = 0;
    
    while(r < row && c < col){
        //添加第一行
        for(let i = c; i < col; i++){
            result.push(matrix[r][i]);
        }
        //添加最后一列
        for(let j = r + 1; j < row; j++){
            result.push(matrix[j][col - 1]);
        }
        //添加最后一行
        if(row - 1 === r)break;
        for(let n = col - 2; n > c; n--){
            result.push(matrix[row - 1][n])
        }
        //添加第一列
        if(col - 1 === c)break;
        for(let m = row - 1; m > r; m--){
            result.push(matrix[m][c]);
        }
        c++;
        r++;
        row--;
        col--;
    }
    return result;
};