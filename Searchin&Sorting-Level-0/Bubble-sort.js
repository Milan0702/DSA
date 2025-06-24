let arr = [4, 5, 1, 3, 9]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < arr.length - 1 - i; i++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped)
            break;
    }
    return arr;
}
let result = bubbleSort(arr)
console.log("Sorted array", result)