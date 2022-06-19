// Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string 
// and change it to any other uppercase English character. You can perform this operation 
// at most k times.

// Return the length of the longest substring containing the same letter you can get 
// after performing the above operations.

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
function characterReplacememnt(s, k) {
    // initialize an object to store letters as keys and frequency as values
    const hash = {};
    // starting index
    let startIndex = 0;
    // the length of the longest string with repeating characters
    let maxLen = 0;
    // the most frequent character in the substring/string as we iterate
    let maxFrequency = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        // set a character as key with a frequency of 0
        if (!hash[s[i]]) hash[s[i]] = 0;
        // increment frequency each time a character is  seen
        hash[s[i]]++
        // the max frequency seen so far
        maxFrequency = Math.max(maxFrequency, hash[s[i]])
        
        // if the sum of the length of the string is greater than k we want to decrement 
        // the value as we make the window smaller since the substring is smaller
        if (i - startIndex + 1 - maxFrequency > k) {      
            hash[s[startIndex]]--                  
            startIndex++                          
        }
        
        maxLen = Math.max(maxLen, i - startIndex + 1)
    }
    
    return maxLen
}
///////////////////////////////////////////////////////////////////////////////////////////
s = "ABAB"
k = 2
console.log('Expecting: 4')
console.log('Output:', characterReplacememnt(s, k))

s = "AABABBA"
k = 1
console.log('Expecting: 4')
console.log('Output:', characterReplacememnt(s, k))

s = "AABCCABCBCCACC"
k = 1
console.log('Expecting: 5')
console.log('Output:', characterReplacememnt(s, k))