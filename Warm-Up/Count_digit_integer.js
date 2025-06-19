function CountDigitInteger(n) {
    // Check if n is negative, if so, convert it to positive
    if (n < 0) {
        n = Math.abs(n); // Convert to positive
    }
    let count = 0;
    while (n > 0) {
        count++;
        n = Math.floor(n / 10); // Remove the last digit
    }
    
    return count;
}
console.log(CountDigitInteger(12345)); // Output: 5
console.log(CountDigitInteger(-12345)); // Output: 5