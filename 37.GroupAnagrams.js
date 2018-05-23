// 给一字符串数组, 将有相同字符的字符串进行分类
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// 对字符串进行排序

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let result = [],
      map = {};
  for(let i = 0; i < strs.length; i++){
      let item = strs[i].slice(0).split('').sort().join('')
      if(map[item]){
          map[item].push(strs[i])
      }else{
          map[item] = [strs[i]]
      }
  }
  let keys = Object.keys(map)
  for(let i = 0; i < keys.length; i++){
      result.push(map[keys[i]])
  }
  return result
};