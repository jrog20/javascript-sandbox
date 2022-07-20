// Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, return the 
// minimum window substring of s such that every character in t (including duplicates) 
// is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
///////////////////////////////////////////////////////////////////////////////////////////
// Sliding Window solution:
// Use two pointers to create a window of letters in s, which would have all the characters from t
// 1. Create a left pointer and a right pointer both pointing at the first element of string s
// 2. Use the right pointer to expand the window until we get a desirable window 
// i.e. a window that contains all of the characters of t.
// 3. Once we have a window with all the characters, we can move the left pointer ahead one by one. 
// If the window is still a desirable one we keep updating the minimum window size.
// 4. If the window is not desirable any more, we continue to repeat step 2.
///////////////////////////////////////////////////////////////////////////////////////////
function minWindow(s, t) {
    // edge cases
    if (t == '' || s == '' || t.length > s.length) return "";

    let minWindow = "";

    const frequencyMap = new Map();

    // build frequency map
    for (let char of t) {
        if (!frequencyMap.get(char)) frequencyMap.set(char, 0);
        frequencyMap.set(char, frequencyMap.get(char) + 1);
    }

    // keep track of chars matched
    let matched = 0;

    // left pointer
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        if (frequencyMap.has(char)) {
        const newFrequency = frequencyMap.get(char) - 1;

            if (newFrequency === 0) matched++;

            frequencyMap.set(char, newFrequency);

            while (matched === frequencyMap.size) {
                const currentWindow = s.substring(left, right + 1);

                if (!minWindow) {
                    // no result set yet, update with current
                    minWindow = currentWindow;
                } else {
                    // update window with the smallest one
                    minWindow = minWindow.length > currentWindow.length ? currentWindow : minWindow;
                }

                // shrink window
                const previous = s[left];
                left++

                // update frequency map if left char was included
                if (frequencyMap.has(previous)) {
                    const freq = frequencyMap.get(previous);

                    if (freq === 0) matched--;

                    frequencyMap.set(previous, freq + 1);
                }
            }
        }
    }
    return minWindow;
}
///////////////////////////////////////////////////////////////////////////////////////////
s = "ADOBECODEBANC"
t = "ABC"
console.log('Expect: BANC')
console.log(minWindow(s, t))

s = "a"
t = "a"
console.log('Expect: a')
console.log(minWindow(s, t))

s = "a"
t = "aa"
console.log('Expect: ""')
console.log(minWindow(s, t))