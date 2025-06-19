function squareOfNumber(num) {
  if (typeof num !== 'number') {
    throw new Error('Input must be a number');
  }
  return num * num;
}
// Example usage:
console.log(squareOfNumber(5)); // Output: 25
console.log(squareOfNumber(10)); // Output: 100