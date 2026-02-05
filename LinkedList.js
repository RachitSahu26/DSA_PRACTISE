function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index === 0) return this.addAtHead(val);
  if (index === this.size) return this.addAtTail(val);

  let newNode = new Node(val);
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;

};







//=======================check that linked List is cycled or not using hash map===============================




// 1.Linked list cycled or not using hash map


let cycledLink = (head) => {
  let seenNode = new Set();
  let curr = head;
  while (curr != null) {
    if (seenNode.has(curr)) {
      return true;
    } else {
      seenNode.add(curr);
      curr = curr.next;
    }
  }
  return false;
}

// 2.Linked list cycled or not using floyd's algorithm
const cycledLinkedWithFlloy = (head) => {
  slow = head;
  fast = head.next;
  while (slow != fast) {
    if (fast != null || fast.next != null) {
      return false;
    } else {
      slow = slow.next;

      fast = fast.next.next;

    }

  }
  return true;
}

// ==================== 2   check that linkded list is palindrome or not ==================


const isPalindrome = (head) => {
  let slow = head;
  let fast = head.next;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

  }
  // now its's time to reverse the list
  let pre = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  // now we will check is it isPalindrome or not


  let firstList = head;
  let secondList = prev;

  while (secondList) {
    if (firstList.value != secondList.vlaue) {
      return fasle

    } else {
      firstList = firstList.next;
      secondList = secondList.next;
    }
    return true;
  }
}


var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1); // fake starting node
    let tail = dummy;             // tail will build the new list

    // Step 1: Compare nodes from both lists
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            tail.next = list1;    // attach list1 node
            list1 = list1.next;   // move list1 forward
        } else {
            tail.next = list2;    // attach list2 node
            list2 = list2.next;   // move list2 forward
        }
        tail = tail.next;         // move tail forward
    }

    // Step 2: Attach the remaining nodes (if any)
    if (list1 !== null) {
        tail.next = list1;
    } else {
        tail.next = list2;
    }

    // Step 3: Return the real head
    return dummy.next;
};
