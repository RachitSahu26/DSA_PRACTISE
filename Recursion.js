var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0); // dummy head
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummy.next;
};








// =============================Merge Two Sorted Lists======================


var mergeTwoLists = function(list1, list2) {
    // dummy node to simplify handling head
    let dummy = new ListNode(0);
    let current = dummy;

    // while both lists have nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // attach the remaining list
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
};






// =============================Merge Two Sorted Lists======================


var mergeTwoLists = function(list1, list2) {
    // dummy node to simplify handling head
    let dummy = new ListNode(0);
    let current = dummy;

    // while both lists have nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // attach the remaining list
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
};





// =================2 Swap Nodes in Pairs Medium==========================

var swapPairs = function(head) {
    // dummy node helps handle head swaps easily
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    // while there are at least two nodes to swap
    while (prev.next !== null && prev.next.next !== null) {
        let first = prev.next;
        let second = prev.next.next;

        // swap
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // move prev to the next pair
        prev = first;
    }

    return dummy.next;
};




// =============================
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let nextNode = curr.next; // save next
        curr.next = prev;         // reverse pointer
        prev = curr;              // move prev
        curr = nextNode;          // move curr
    }

    return prev;
};


// ==================234. Palindrome Linked List===================

var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;

    // Step 1: Find middle
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse second half
    let prev = null;
    while (slow !== null) {
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    // Step 3: Compare both halves
    let left = head;
    let right = prev;

    while (right !== null) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    return true;
};


// ====================================Remove Linked List Elements============


var removeElements = function(head, val) {
    // Dummy node to handle removal of head nodes
    let dummy = new ListNode(0);
    dummy.next = head;

    let current = dummy;

    while (current.next !== null) {
        if (current.next.val === val) {
            // skip the node with matching value
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next;
};




