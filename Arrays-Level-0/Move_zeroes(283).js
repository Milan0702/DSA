// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//     let x= 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!==0){
//             nums[x]=nums[i];
//             x++;
//         }
//     }
//     for(let i=x;i<nums.length;i++){
//         nums[i]=0;
//     }
// };

//above is my solution
// below is solution from leetcode discuss (more optimal using swapping)
var moveZeroes = function(nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
    }

    return nums;    
};

//below is also ckomapct one of swapping solution
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let insPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            nums[insPos] = nums[i]
            if (i !== insPos) nums[i] = 0;
            insPos++;
        }
    }
};