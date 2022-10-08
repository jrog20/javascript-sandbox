// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false
///////////////////////////////////////////////////////////////////////////////////////////
// Stack solution:
// 1. Initialize a stack to keep track of opening brackets.
// 2. Initialize a hash map to keep track of mappings. Also makes it easier to add more types of parenthesis.
// 2. Process each bracket of the expression one at a time.
// 3. If we encounter an opening bracket, we simply push it onto the stack. This means we will 
// process it later, let us simply move onto the sub-expression ahead.
// 4. If we encounter a closing bracket, then we check the element on top of the stack. If the 
// element at the top of the stack is an opening bracket of the same type, then we pop it off 
// the stack and continue processing. Else, this implies an invalid expression.
// 5. In the end, if we are left with a stack still having elements, then this implies an invalid expression.
///////////////////////////////////////////////////////////////////////////////////////////
function isValid(s) {
    let stack = [];
    let mapping = {')': '(', ']': '[', '}': '{'};
    for(index in s) {
        // if the character is a closing bracket
        if(s[index] in mapping) {
            // get the top element of the stack. If the stack is empty, set a dummy value of '#'
            let topElement = stack.length === 0 ? '#' : stack.pop();
            // if the mapping for this bracket doesn't match the stack's top element, return false
            if(mapping[s[index]] != topElement) {
                return false;
            }
        } else {
            // if it is an opening bracket, push it to the stack
            stack.push(s[index]);
        }
    }
    // if the stack still contains elements, then it is an invalid expression
    return stack.length === 0;
}
///////////////////////////////////////////////////////////////////////////////////////////
s = "()"
console.log('Expected Value: true')
console.log('Actual Value:', isValid(s))

s = "()[]{}"
console.log('Expected Value: true')
console.log('Actual Value:', isValid(s))

s = "(]"
console.log('Expected Value: false')
console.log('Actual Value:', isValid(s))

s = "((()(())))"
console.log('Expected Value: true')
console.log('Actual Value:', isValid(s))