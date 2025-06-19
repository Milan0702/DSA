function Palindrome(n) {
    // Check if n is negative, if so, convert it to positive
    if (n < 0) {
        n = Math.abs(n); // Convert to positive
    }
    let count = 0;
    let original = n; // Store the original number for comparison
    let lastDigit = 0;
    let reversed = 0; // Initialize reversed number
    while (n > 0) {
        
        lastDigit = n%10; // Remove the last digit
        reversed = (reversed * 10) + lastDigit; // Build the reversed number
        n = Math.floor(n / 10); // Remove the last digit
    }
    
    return reversed === original;
}
if (Palindrome(121)){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}