// Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a 
// different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, 
// return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// ###############################################################################################
// One pass solution:

// We can iterate over the given array once, keeping track of the largest number following the
// smallest number. 

// We can initiate two variables, min_price and max_profit, to keep track of the lowest buy price
// and the maximum profit seen so far.

// Time complexity: O(n)
// Space complexity: O(1)
// ###############################################################################################
function max_profit(prices) {
    let min_price = prices[0];
    let max_profit = 0;
    for(i = 0; i < prices.length; i++) {
        if(prices[i] < min_price) {
            min_price = prices[i];
        }
        let current_max_profit = prices[i] - min_price;
        if(current_max_profit > max_profit) {
            max_profit = current_max_profit
        }
    }
    return max_profit;
}
// ###############################################################################################
prices = [7,1,5,3,6,4]
console.log('Expecting 5')
console.log(max_profit(prices))

prices = [7,6,4,3,1]
console.log('Expecting 0')
console.log(max_profit(prices))