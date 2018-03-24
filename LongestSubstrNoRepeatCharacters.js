//给定一个字符串,找出其中没有重复字符的最长子串的长度

//要检查重复,就是用map

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length,
        map = new Map(),
        max = 0;
    
    for(let i = 0, j = 0; i < len; i++){
        if(map.has(s[i])){
            //j用来保存上次重复字符串的位置
            j = Math.max(map.get(s[i]) + 1, j);        
        }
        
        max = Math.max(max, i - j + 1);
        map.set(s[i], i);
    }
    
    return max
};

console.log(lengthOfLongestSubstring('asdfscaac'))