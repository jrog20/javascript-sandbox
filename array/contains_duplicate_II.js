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
// brute force approach: 
// double for loop 
///////////////////////////////////////////////////////////////////////////////////////////
// function containsNearbyDuplicate(nums, k) {
//     for(i = 0; i < nums.length; i++) {
//         for(j = 1; j < nums.length; j++) {
//             if(nums[i] == nums[j] && Math.abs(i-j) <= k) return true;
//         }
//     }
//     return false;
// }
///////////////////////////////////////////////////////////////////////////////////////////
// map approach:

///////////////////////////////////////////////////////////////////////////////////////////
function containsNearbyDuplicate(nums, k) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] >= 0 && i - hash[nums[i]] <= k) return true;
        hash[nums[i]] = i;
    }
    return false;
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