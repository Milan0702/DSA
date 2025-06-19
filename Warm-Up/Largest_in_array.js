let arr = [4, 5, 6, 9, 2, 3, 8, 7];
let largest=-Infinity;
for(let i =0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
}
console.log("largest number in the array: " + largest); // Output: 1