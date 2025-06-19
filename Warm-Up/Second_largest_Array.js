function SecondLargest(arr) {
  let Largest = -Infinity;

  let SecondLargest = -Infinity;
  if (length < 2) {
    return "Array must contain at least two elements.";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Largest) {
      SecondLargest = Largest;
      Largest = arr[i];
    } else if (arr[i] > SecondLargest && arr[i] < Largest) {
      SecondLargest = arr[i];
    }
  }
  return SecondLargest === -Infinity
    ? "No second largest number found"
    : SecondLargest;
}

let arr = [4, 5, 6, 9, 2, 3, 8, 7];
let length = arr.length;
console.log("Second largest number in the array: " + SecondLargest(arr)); // Output: 8
