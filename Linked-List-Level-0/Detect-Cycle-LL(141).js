//approach 1: Using a Set to track visited nodes

// var hasCycle = function(head) {
//     let seenNodes = new Set();
//     let curr = head;
//     while (curr !== null) {
//         if (seenNodes.has(curr)) {
//             return true;
//         }
//         seenNodes.add(curr);
//         curr = curr.next;
//     }
//     return false;
// };

//approach 2: Floyd's Cycle Detection Algorithm (Tortoise and Hare)

var hasCycle = function(head) {
    if (!head) return false;
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};