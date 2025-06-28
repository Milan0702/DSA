//approach 1: Using an array to store values and check for palindrome

// var isPalindrome = function(head) {
//     let arr = [];
//     let curr = head;
//     while (curr !== null) {
//         arr.push(curr.val);
//         curr = curr.next;
//     }
//     let left = 0, right = arr.length - 1;
//     while (left < right) {
//         if (arr[left++] !== arr[right--]) return false;
//     }
//     return true;
// };

//approach 2: Reverse the second half of the list and compare
var isPalindrome = function(head) {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse second half
    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // Compare two halves
    let first = head, second = prev;
    while (second) {
        if (first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }

    return true;
};