// Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase 
// letters and removing all non-alphanumeric characters, it reads the same forward 
// and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
///////////////////////////////////////////////////////////////////////////////////////////
// two pointer solution:

// Initialize one pointer on each end of the word; left and right pointers
// Loop: Continue looping while s[left] pointer == s[right] pointer
// Increment left pointer one place to the right and right pointer one place to the left
// on each loop iteration
// Return false if ever the pointer values are not equal
// Return true once we reach the end of the string and the values are still equal
///////////////////////////////////////////////////////////////////////////////////////////
function isPalindrome(s) {
    let left = 0;
    let right = s.length -1;

    while(left < right) {
        while(left < right && !s[left].match(/^[0-9a-zA-Z]+$/)) {
            left++
        }
        while(left < right && !s[right].match(/^[0-9a-zA-Z]+$/)) {
            right--
        }
        if(s[left].toLowerCase() != s[right].toLowerCase()) {
            return false
        }
        left++
        right--
    }
    return true
}
///////////////////////////////////////////////////////////////////////////////////////////
s = "A man, a plan, a canal: Panama"
console.log('Expected Value: true')
console.log('Actual Value:', isPalindrome(s))

s = "race a car"
console.log('Expected Value: false')
console.log('Actual Value:', isPalindrome(s))

s = " "
console.log('Expected Value: true')
console.log('Actual Value:', isPalindrome(s))