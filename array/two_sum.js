// Two Sum

// Given an array of integers nums and an integer target, return indices 
// of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// #########################################################################
// Hash solution:

// Time complexity: O(n)
// Space complexity: O(n)

// While iterating over the nums array, we insert each element into the hash 
// as keys. We check to see if the complement for the current element already
// exists in the hash. If yes, return the indices for both elements.

function twoSum(nums, target) {
    let hash = {}
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(complement in hash) {
            return [hash[complement], i];
        }
        hash[nums[i]] = i
    }
}

// ##########################################################################
nums = [2,7,11,15]
target = 9 
console.log('Expecting: [0,1]')
console.log(twoSum(nums, target))

nums = nums = [3,2,4]
target = 6
console.log('Expecting: [1,2]')
console.log(twoSum(nums, target))

nums = [3,3]
target = 6
console.log('Expecting: [0,1]')
console.log(twoSum(nums, target))