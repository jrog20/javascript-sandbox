// Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

///////////////////////////////////////////////////////////////////////////////////////////
// Dynamic Programming
// We can reach the ith step one of two ways:
// 1. Taking a single step (i - 1)
// 2. Taking a step of 2 (i - 2)
// So the total number of ways to reach the ith step is to sum the two ways: (i - 1) + (i - 2)
///////////////////////////////////////////////////////////////////////////////////////////
function climbStairs(n) {
    if(n == 1){return 1};
    let steps = [];
    steps.push(0);
    steps.push(1);
    steps.push(2);
    let i = 3;
    while(i <= n) {
        let next = steps[i - 1] + steps[i - 2];
        steps.push(next);
        i += 1;
    }
    return steps[n];
}
///////////////////////////////////////////////////////////////////////////////////////////
n = 2
console.log('Expecting: 2')
console.log('Output:', climbStairs(n))

n = 3
console.log('Expecting: 3')
console.log('Output:', climbStairs(n))