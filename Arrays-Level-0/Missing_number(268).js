/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arraySum = 0;
    let totalSum = 0;
    for(let i = 0;i<nums.length;i++){
        arraySum=arraySum+nums[i];
        totalSum=totalSum+i+1;
    }
    return totalSum-arraySum;
};