//和上一题类似, 只是对于一个元素不能重复选择

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let result = [],
      cur = [];
     
  var dfs = function(candidates, target, cur, i, result){   
      if(!target){
          result.push([...cur]);
          return;
      }
      for(let j = i; j < candidates.length; j++){
          if (j > i && candidates[j] == candidates[j-1]) continue;
          if(candidates[j] <= target){
              cur.push(candidates[j]);
              dfs(candidates, target - candidates[j], cur, j + 1, result);
              cur.pop();
          }else{
              break;
          }
      }
  }
  
  dfs(candidates, target, cur, 0, result);
  return result  
};