// Longest Increasing Subsequence

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements 
// without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence 
// of the array [0,3,1,6,2,2,7].

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
///////////////////////////////////////////////////////////////////////////////////////////
// Dynamic Programming solution:
// 1. Initialize an array dp with length nums.length and all elements equal to 1. dp[i] represents 
// the length of the longest increasing subsequence that ends with the element at index i.

// 2. Iterate from i = 1 to i = nums.length - 1. At each iteration, use a second for loop to 
// iterate from j = 0 to j = i - 1 (all the elements before i). For each element before i, 
// check if that element is smaller than nums[i]. If so, set dp[i] = max(dp[i], dp[j] + 1).

// 3. Return the max value from dp.

// Time Complexity: O(n^2)
// Space Complexity: 0(n)

// function lengthOfLIS(nums) {
//     let dp = Array(nums.length).fill(1);
//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[i] > nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//     }
//     return Math.max(...dp);
// }
///////////////////////////////////////////////////////////////////////////////////////////
// Dynamic Programming - Intelligently build the subsequence:
// 1. Initialize an array sub which contains the first element of nums.

// 2. Iterate through the input, starting from the second element. For each element num:
//     - If num is greater than any element in sub, then add num to sub.
//     - Otherwise, iterate through sub and find the first element that is 
//     greater than or equal to num. Replace that element with num.

// 3. Return the length of sub.

// Note:  this algorithm does not always generate a valid subsequence of the input, but the 
// length of the subsequence will always equal the length of the longest increasing subsequence. 
// For example, with the input [3, 4, 5, 1], at the end we will have sub = [1, 4, 5], which isn't 
// a subsequence, but the length is still correct. The length remains correct because the length 
// only changes when a new element is larger than any element in the subsequence. In that case, 
// the element is appended to the subsequence instead of replacing an existing element.

// Time Complexity: O(n^2)
// Space Complexity: 0(n)

function lengthOfLIS(nums) {
    let sub = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > sub[-1]) {
            sub.append(nums[i]);
        } else {
            let j = 0;
            while (nums[i] > sub[j]) {
                j += 1;
            }
            sub[j] = nums[i];
        }
    }
    return sub.length;
}

///////////////////////////////////////////////////////////////////////////////////////////
nums = [10,9,2,5,3,7,101,18]
console.log('Expecting: 4')
console.log('Output:', lengthOfLIS(nums))

nums = [0,1,0,3,2,3]
console.log('Expecting: 4')
console.log('Output:', lengthOfLIS(nums))

nums = [7,7,7,7,7,7,7]
console.log('Expecting: 1')
console.log('Output:', lengthOfLIS(nums))