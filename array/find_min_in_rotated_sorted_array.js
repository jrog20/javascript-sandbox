// Find Minimum in Rotated Sorted Array

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 

// For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times
// [0,1,2,4,5,6,7] if it was rotated 7 times

// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array 
// [a[n-1], a[0], a[1], a[2], ..., a[n-2]]

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times

// Example 2:
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times

// Example 3:
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times
///////////////////////////////////////////////////////////////////////////////////////////
// Binary Search solution

// Because this is not just a sorted array, but rather a sorted array that has been
// rotated, in order to find the smallest element, we need to find the inflection point
// i.e. when the element to the right is no longer greater than the element to its left.

// 1. Find the mid point of the array
// 2. If the mid element is greater than the first element of the array, we need to 
// move to the right
// 3. If the mid element is less than the first element of the array, we need to 
// move to the left
// 4. We stop searching when we find the inflection point:
    // a. nums[mid] > nums[mid+1] => mid+1 is the smallest
    // b. nums[mid-1] > nums[mid] => mid is the smallest

// Time Complexity: O(log N)
// Space Complexity: O(1)
///////////////////////////////////////////////////////////////////////////////////////////
function findMin(nums) {
    // left and right pointers
    let left = 0, right = nums.length - 1;
    // if the list has only one element, return that element OR
    // if the last element is greater than the first element, there is no rotation,
    // so the first element is the smallest
    if (nums.length == 0 || nums[right] > nums[0]) return nums[0];
    // binary search
    while (left <= right) {
        // find the mid element
        let mid = Math.floor((left + right)/2);
        // if the mid element is greater than the next element to the right, then mid+1 element is the smallest
        // This point would be the point of change. From higher to lower value.
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        // if the mid element is less than the previous element then mid element is the smallest
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }
        // if the mid element is greater than the first element, the smallest value 
        // is still to the right as we are still dealing with elements greater than nums[0],
        // so we move to the right
        if (nums[mid] > nums[0]) {
            left = mid + 1;
        }
        // if nums[0] is greater than the mid element then the smallest value is to the left
        if (nums[0] > nums[mid]) {
            right = mid - 1;
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
nums = [3,4,5,1,2]
console.log('Expecting: 1')
console.log(findMin(nums))

nums = [4,5,6,7,0,1,2]
console.log('Expecting: 0')
console.log(findMin(nums))

nums = [11,13,15,17]
console.log('Expecting: 11')
console.log(findMin(nums))