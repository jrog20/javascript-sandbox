// Maximum Product Subarray

// Given an integer array nums, find a contiguous non-empty subarray within the 
// array that has the largest product, and return the product.

// A subarray is a contiguous subsequence of the array.

// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
///////////////////////////////////////////////////////////////////////////////////////////
// Approach:

// Iterate through the array, keeping track of the current largest product.
// If the next element makes the product less than the previous product, 
// start the current_product over with the current index.

// Keep track of three variables:
// 1. The current element
// 2. The maximum so far of:
    // 1. the current element (this will account for encountering a 0 or negative number)
    // 2. maximum so far * current element (if all positive numbers, and therefore continuously increasing)
    // 3. minimum so far * current element (when a second negative number is encountered)
// 3. We must keep track of the minimum so far in order to account for the posibility of
    // encountering a second negative number, which would then possibly make it the max result

// Time complexity: O(n)
// Space complexity: O(1)

///////////////////////////////////////////////////////////////////////////////////////////
function maxProduct(nums) {
    if(nums.length == 0) {
        return 0
    }
    // initialize variables
    let maxSoFar = nums[0]
    let minSoFar = nums[0]
    let result = maxSoFar
    // iterate through the nums array from the next element (index 1) to end of array
    for(i = 1; i < nums.length; i++) {
        // Keep track of three variables:
        // 1. The current element
        let curr = nums[i]
        // 2. The maximum so far of:
            // 1. the current element (this will account for encountering a 0 or negative number)
            // 2. maximum so far * current element (if all positive numbers, and therefore continuously increasing)
            // 3. minimum so far * current element (when a second negative number is encountered)
            maxSoFar = Math.max(curr, maxSoFar * curr, minSoFar * curr)
        // 3. We must keep track of the minimum so far in order to account for the posibility of
        // encountering a second negative number, which would then possibly make it the max result
        minSoFar = Math.min(curr, maxSoFar * curr, minSoFar * curr)

        result = Math.max(maxSoFar, result)
    }
    return result
}
///////////////////////////////////////////////////////////////////////////////////////////
nums = [2,3,-2,4]
console.log('Expecting: 6')
console.log('Output:', maxProduct(nums))

nums = [-2,0,-1]
console.log('Expecting: 0')
console.log('Output:', maxProduct(nums))

nums = [2,-5,3,1,-4,0,-10,2,8]
console.log('Expecting: 120')
console.log('Output:', maxProduct(nums))

nums = []
console.log('Expecting: 0')
console.log('Output:', maxProduct(nums))