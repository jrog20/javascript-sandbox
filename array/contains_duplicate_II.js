// Contains Duplicate II

// Given an integer array nums and an integer k, return true if there are two distinct 
// indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
function containsNearbyDuplicate(nums, k) {

}
///////////////////////////////////////////////////////////////////////////////////////////
nums = [1,2,3,1]
k = 3
console.log('Expecting: true')
console.log('Actual:', containsNearbyDuplicate(nums, k))

nums = [1,0,1,1]
k = 1
console.log('Expecting: true')
console.log('Actual:', containsNearbyDuplicate(nums, k))

nums = [1,2,3,1,2,3]
k = 2
console.log('Expecting: false')
console.log('Actual:', containsNearbyDuplicate(nums, k))