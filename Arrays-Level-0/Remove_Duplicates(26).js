/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //using two pointer aprroach
    let x = 0;       // pointer for unique element
    for(i=0;i<nums.length;i++){     //i pointer for array traversal
        if(nums[i]>nums[x]){        //if next unique number is found 
            nums[x+1]=nums[i];      //bring it to x+1 of nums
            x++;                    //and increment x
        }
    }
    return x+1
};