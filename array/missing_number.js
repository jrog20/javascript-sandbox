// Write a function that returns the missing number in the list. Complexity of O(N) required.

// Example:
// nums = [0, 1, 2, 4, 5]
// missingNumber(nums) -> 3

// ###########################################################
// Approach: 
// Iterate through the list, checking to see if each number for 
// the length of the list +1 exists in the list. 
// If the number does not exist, return the number
// ###########################################################
function missing_number(nums) {
    for(i = 0; i < nums.length + 1; i++) {
        if(!nums.includes(i)) {
            return i
        }
    }
}

// ###########################################################
nums = [0, 1, 2, 4, 5]
console.log('Expecting 3')
console.log('Output =', missing_number(nums))
console.log('')

nums = [1, 2, 3, 4]
console.log('Expecting 0')
console.log('Output =', missing_number(nums))