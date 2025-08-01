/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left=0;
    let right=nums.length;
    while(right>=left){
        middle=Math.floor((right+left)/2);
        if(nums[middle]===target) return middle;
        else if(nums[middle]>target){
            right=middle-1;
        }else{
            left=middle+1;
        }
    }
    return -1;
};