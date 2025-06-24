function PrintNto1(n){
    if(n==0){
        return;
    }
    console.log(n);
    n=n-1;
    PrintNto1(n);
}
// Example usage:
PrintNto1(5); // Output: 5 4 3 2