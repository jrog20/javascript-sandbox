// Fizz Buzz

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 
// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
///////////////////////////////////////////////////////////////////////////////////////////
// iterative approach
// Time Complexity: O(N)
// Space Complexity: O(1)
///////////////////////////////////////////////////////////////////////////////////////////
// function fizzBuzz(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 15 == 0) {
//             result.push('FizzBuzz');
//         } else if (i % 5 == 0) {
//             result.push('Buzz');
//         } else if (i % 3 == 0) {
//             result.push('Fizz');
//         } else {
//             result.push(i.toString());
//         }
//     }
//     return result;
// }
///////////////////////////////////////////////////////////////////////////////////////////
// Consolidated iterative approach
// Time Complexity: O(N)
// Space Complexity: O(1)
///////////////////////////////////////////////////////////////////////////////////////////
// function fizzBuzz(n) {
//     let result = [];

//     for (let i = 1; i <= n; i++) {

//         let currentString = "";

//         if (i % 3 == 0) {
//             currentString += 'Fizz';
//         };

//         if (i % 5 == 0) {
//             currentString += 'Buzz';
//         };

//         if (currentString == '') { 
//             currentString += i.toString();
//         }

//         result.push(currentString);
//     }

//     return result;
// }
///////////////////////////////////////////////////////////////////////////////////////////
// Hash approach:
// - Put all the mappings in a hash table. The hash table fizzBuzzHash would look something like 
// { 3: 'Fizz', 5: 'Buzz' }
// - Iterate on the numbers from 1 to n.
// - For every number, iterate over the fizzBuzzHash keys and check for divisibility.
// - If the number is divisible by the key, concatenate the corresponding hash value to the 
// answer string for current number. We do this for every entry in the hash table.
// - Add the answer string to the answer list.
// Time Complexity: O(N)
// Space Complexity: O(1)
///////////////////////////////////////////////////////////////////////////////////////////
function fizzBuzz(n) {
    let result = [];
    let fizzBuzzHash = { 3: 'Fizz', 5: 'Buzz' };
    for(let i = 1; i <= n; i++) {
        let currentString = '';
        for(key in fizzBuzzHash) {
            if(i % key == 0) {
                currentString += fizzBuzzHash[key];
            }
            // if currentString == '', push i(string) to result
            // otherwise, push currentString to result
        }
        if(currentString == '') {
            result.push(i.toString());
        } else {
            result.push(currentString);
        }
    }
    return result;
}
///////////////////////////////////////////////////////////////////////////////////////////
n = 3
console.log('Expected Value: ["1","2","Fizz"]')
console.log('Actual Value:', fizzBuzz(n))

n = 5
console.log('Expected Value: ["1","2","Fizz","4","Buzz"]')
console.log('Actual Value:', fizzBuzz(n))

n = 15
console.log('Expected Value: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]')
console.log('Actual Value:', fizzBuzz(n))