let arr = [-1, -2, -3, 4, 5, -6, 7, 8, -9, 10];
let count=0;

for(let i=0;i<arr.length;i++){4
    if(arr[i]<0){
        count++;
    }
}
console.log("Count of negative numbers in the array: " + count); // Output: 5