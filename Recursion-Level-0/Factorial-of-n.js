function Factorial(n){
    if(n===0 || n===1){
        return 1;
    }
    return n*Factorial(n-1);
}
Factorial(5); // Output: 120 (5 * 4 * 3 * 2 * 1)