/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let flag=false;
    if(n==1){
        return true;
    }
    else if (n < 1 || n % 2 !== 0) return false;
    return isPowerOfTwo(n/2);
};
console.log(isPowerOfTwo(16)); // Output: true (2^4 = 16)
console.log(isPowerOfTwo(18)); // Output: false (not a power of 2)