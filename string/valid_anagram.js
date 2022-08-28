// Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different 
// word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
///////////////////////////////////////////////////////////////////////////////////////////
// two pointer solution:
// edge cases: Immediately return false if:
// 1. s.length != t.length
// 2. s.length < 0 || t.length < 0

// Initialize one pointer on each end of the word; left and right pointers
// Initialize a mid pointer to know when the middle has been reached
// Loop: Continue looping while s[left] pointer == t[right] pointer
// Increment left pointer one place to the right and right pointer one place to the left
// on each loop iteration
// Return false if ever the pointer values are not equal
// Return true once we reach the middle and the values are still equal
///////////////////////////////////////////////////////////////////////////////////////////
function isAnagram(s, t) {
    if(s.length != t.length) {
        return false;
    }
    let sSorted = s.split('').sort().join('');
    let tSorted = t.split('').sort().join('');
    return sSorted == tSorted;
}
///////////////////////////////////////////////////////////////////////////////////////////
s = "anagram"
t = "nagaram"
console.log('Expected Value: true')
console.log('Actual Value:', isAnagram(s, t))

s = "rat"
t = "car"
console.log('Expected Value: false')
console.log('Actual Value:', isAnagram(s, t))

s = "sam"
t = "asm"
console.log('Expected Value: true')
console.log('Actual Value:', isAnagram(s, t))