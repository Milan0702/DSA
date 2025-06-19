let arr = [4, 5, 6, 9, 10, 2, 3, 8, 7];
let smallest=Infinity;
for(let i =0;i<arr.length;i++){
    if(arr[i]<smallest){
        smallest=arr[i];
    }
}
console.log("Smallest number in the array: " + smallest); // Output: 1