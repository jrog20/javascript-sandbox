// Given two strings text1 and text2, return the length of their longest common subsequence. 
// If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some 
// characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

// Example 1:
// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.

// Example 2:
// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.

// Example 3:
// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
///////////////////////////////////////////////////////////////////////////////////////////
// Dynamic Programing solution - Memoization:
// In Python, we can use lru_cache to make sure that the results of the method are memoized

// *pseudocode*
// define function LCS(text1, text2):
//     # If either string is empty there can be no common subsequence
//     if length of text1 or text2 is 0:
//         return 0

//     letter1 = the first letter in text1

//     # The case where the line *is not* part of the optimal solution
//     case1 = LCS(text1.substring(1), text2)

//     case2 = 0
//     if letter1 is in text2:
//         firstOccurence = first position of letter1 in text2
//         # The case where the line *is* part of the optimal solution
//         case2 = 1 + LCS(text1.substring(1), text2.substring(firstOccurence + 1))

//     return maximum of case1 and case2
///////////////////////////////////////////////////////////////////////////////////////////
function longestCommonSubsequence(tex1, text2) {

}
///////////////////////////////////////////////////////////////////////////////////////////
text1 = "abcde"
text2 = "ace"
console.log('Expecting: 3')
console.log('Output:', longestCommonSubsequence(text1, text2))

text1 = "abc"
text2 = "abc"
console.log('Expecting: 3')
console.log('Output:', longestCommonSubsequence(text1, text2))

text1 = "abc"
text2 = "def"
console.log('Expecting: 0')
console.log('Output:', longestCommonSubsequence(text1, text2))

text1 = "actgattag"
text2 = "gtgtgatcg"
console.log('Expecting: 5')
console.log('Output:', longestCommonSubsequence(text1, text2))