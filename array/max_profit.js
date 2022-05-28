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

// We can initiate two variables, minPrice and maxProfit, to keep track of the lowest buy price
// and the maximum profit seen so far.

// Time complexity: O(n)
// Space complexity: O(1)
// ###############################################################################################
function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for(i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }
        let currentMaxProfit = prices[i] - minPrice;
        if(currentMaxProfit > maxProfit) {
            maxProfit = currentMaxProfit
        }
    }
    return maxProfit;
}
// ###############################################################################################
prices = [7,1,5,3,6,4]
console.log('Expecting 5')
console.log(maxProfit(prices))

prices = [7,6,4,3,1]
console.log('Expecting 0')
console.log(maxProfit(prices))