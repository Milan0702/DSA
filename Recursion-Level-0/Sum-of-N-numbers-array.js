let arr = [5, 2, 6, 1, 3];

function sum(n) {
    if (n === 0) return arr[n];
    return arr[n] + sum(n - 1);
}
console.log(sum(3)); // Output: 9 (5 + 2 + 6 + 1)

