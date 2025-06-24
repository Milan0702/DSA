// var singleNumber = function(nums) {
//     let hash = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (!hash[nums[i]]) {
//             hash[nums[i]] = 1;
//         } else {
//             hash[nums[i]]++;
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (hash[nums[i]] === 1) {
//             return nums[i];
//         }
//     }
// };
//above is hashmap solution
//below is xor solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let x=0;
    for(let i=0;i<nums.length;i++){
        x=x^nums[i];
    }
    return x;
};