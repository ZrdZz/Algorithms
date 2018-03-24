//给定一个字符串, 找出最长的回文子字符串

//回文有一个特点, 他是从中心的一个或两个字母往两边扩展的
//从最简单的字符串看:
//'a'是一个回文, 即S(i, i)
//'aa'是一个回文, 即S(i, i + 1) && s[i] = s[i + 1]
//'baab', 即S(i, j) when S(i + 1, j - 1) && s[i] = s[j]

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0,
        end = 0;
    
    for(let i = 0; i < s.length; i++){
        //单个字符的情况
        let len1 = expandAroundCenter(s, i, i),
        //两个字符的情况    
        len2 = expandAroundCenter(s, i, i + 1);
        
        let len = len1 > len2 ? len1 : len2;

        //每一次遍历后, 若得到的回文长度大于上一次的回文长度, 则找到当前回文的左右边界
        if(len > end - start + 1){
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    
    return s.substr(start, end - start + 1)
}

var expandAroundCenter = function(s, left, right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
    }
    return right - left - 1
}
