// Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]
///////////////////////////////////////////////////////////////////////////////////////////
// Sort Method:
// Instanciate a new result object
// Iterate through the string array
// For each element:
// 1. If the sorted version of the current string is a key in the result object, push the original
// version of that string to that key.
// 2. If the sorted versino of the current string is not a key in the result object, create a new
// key/value pair in the result object
// 3. Return the values of the result object
///////////////////////////////////////////////////////////////////////////////////////////
function groupAnagrams(strs) {
    let result = {};
    strs.forEach(str => {
        let sorted = str.split('').sort().join('');
        if (result[sorted]) {
            result[sorted].push(str);
        } else {
            result[sorted] = [str];
        }
    });
    return Object.values(result);
}
///////////////////////////////////////////////////////////////////////////////////////////
strs = ["eat","tea","tan","ate","nat","bat"]
console.log('Expected Value: [["bat"],["nat","tan"],["ate","eat","tea"]]')
console.log('Actual Value:', groupAnagrams(strs))

strs = [""]
console.log('Expected Value: [[""]]')
console.log('Actual Value:', groupAnagrams(strs))

strs = ["a"]
console.log('Expected Value: [["a"]]')
console.log('Actual Value:', groupAnagrams(strs))