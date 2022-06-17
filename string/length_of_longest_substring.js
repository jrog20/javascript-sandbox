// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
///////////////////////////////////////////////////////////////////////////////////////////
function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let curr = 0;
    let hash = {}; 
    if(s.length < 2) {
        return s.length;
    }
    for(let i = 0; i < s.length;  i++) {
        if(hash[s[i]] == null) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[s[i]], curr + 1);
        }
        maxLen = Math.max(maxLen, curr);
        //save the index
        hash[s[i]] = i;
    }
    return maxLen;
}
///////////////////////////////////////////////////////////////////////////////////////////
s = "abcabcbb"
console.log('Expecting: 3')
console.log('Output:', lengthOfLongestSubstring(s))

s = "bbbbb"
console.log('Expecting: 1')
console.log('Output:', lengthOfLongestSubstring(s))

s = "pwwkew"
console.log('Expecting: 3')
console.log('Output:', lengthOfLongestSubstring(s))