/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let result = [],
      res = [];
     
  var dfs = function(candidates, target, result, i, res){   
      if(target === 0){
          //注意这里保存的必须是一个副本
          result.push([...res]);
      }
  
      for(let j = i; j < candidates.length && candidates[j] <= target; j++){
          res.push(candidates[j]);
          dfs(candidates, target - candidates[j], result, j, res);
          res.length = res.length - 1;   
      }
  }
  
  dfs(candidates, target, result, 0, res);
  return result  
};