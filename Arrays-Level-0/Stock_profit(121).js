/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let maxprofit = 0;
    for(let i=1;i<prices.length;i++){
        if(prices[i]-min > maxprofit){
            maxprofit = prices[i]-min
        }
        if(prices[i]<min){
            min=prices[i]
        }
    }
    return maxprofit
};