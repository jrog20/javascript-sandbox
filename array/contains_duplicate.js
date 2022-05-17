// Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
// ################################################################################################
// Put the nums array into a set. If the length of the set is less than the length of the array,
// there is a duplicate, return True. Otherwise, there is not, return False.
function containsDuplicate(nums) {
    const numSet = new Set(nums)
    if (numSet.size < nums.length) {
        return true
    } else {
        return false
    }
}

// ################################################################################################
nums = [1,2,3,1]
console.log('Expecting True')
console.log(containsDuplicate(nums))

nums = [1,2,3,4]
console.log('Expecting False')
console.log(containsDuplicate(nums))

nums = [1,1,1,3,3,4,3,2,4,2]
console.log('Expecting True')
console.log(containsDuplicate(nums))