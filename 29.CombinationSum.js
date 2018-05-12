//给定一个没有排序的数组, 找到和为target的一组数(不能重复), 数组元素可以重复选择, 所有数都为正数

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let result = [],
        cur = [];
       
    var dfs = function(candidates, target, cur, i, result){   
        if(!target){
            result.push([...cur]);
            return;
        }
        for(let j = i; j < candidates.length; j++){
            if(candidates[j] <= target){
                cur.push(candidates[j]);
                dfs(candidates, target - candidates[j], cur, j, result);
                cur.pop();
            }else{
                break;
            }
        }
    }
    
    dfs(candidates, target, cur, 0, result);
    return result  
};