// Container with the most water

// You are given an integer array height of length n. There are n vertical lines drawn 
// such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1
///////////////////////////////////////////////////////////////////////////////////////////
// Two pointer solution:
// The greatest area will be constrained by the lowest line height, and will be increased
// by the greater the distance between lines.
// Using two pointers, we move the pointer of the lower height one closer to the pointer
// with a higher height.

// Time complexity: O(n)
// Space complexity: O(1)
///////////////////////////////////////////////////////////////////////////////////////////
function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length -1;
    while (right >= left) {
        let containerLength = right - left;
        let containerHeight = Math.min(height[right], height[left]);
        let area = containerLength * containerHeight;
        maxWater = Math.max(area, maxWater);
        if (height[left] < height[right]) {
            left += 1
        } else {
            right -= 1
        }
    }
    return maxWater
}
///////////////////////////////////////////////////////////////////////////////////////////
height = [1,8,6,2,5,4,8,3,7]
console.log('Expecting: 49')
console.log(maxArea(height))

height = [1,1]
console.log('Expecting: 1')
console.log(maxArea(height))

height = [11,13,15,17]
console.log('Expecting: 33')
console.log(maxArea(height))
