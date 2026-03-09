// Problem Statement: 1========================
//  1. Given the root of a binary tree, return the preorder traversal of its nodes’ values.



// preOrder-> root ->left->right

// Examples:
// Example 1:
// Input: root = [1,null,2,3]

// Output: [1,2,3]

// Explanation:




var preorderTraversal = function (root) {
    let ans = [];
    function traversal(curr) {
        if (!curr) return;
        ans.push(curr.val);
        traversal(curr.left);
        traversal(curr.right);
    }
    traversal(root);
    return ans;
}


//  method 2: Given the root of a binary tree, return the preorder traversal of its nodes’ values.
// preOrder-> root ->left->right
// without Recursion


var preOrderTraversal = (root) => {
    if (!root) return [];

    let stack = [root];
    let ans = []
    while (stack.length) {
        let curr = stack.pop();
        ans.push(curr.val);
        stack.push(curr.left)
        curr.left && stack.push(curr.left);
        curr.right && stack.push(curr.right);


    }

    return ans;
}

// Problem Statement: 2 ========================
// 2. Given the root of a binary tree, return the inorder traversal of its nodes’ values..
// Indorder ---->left --->root--->right
// Examples:
// Example 1:
// Input: root = [1,null,2,3]

// Output: [1,3,2]


var inorderTraversal = function (root) {
    let ans = [];
    function traversal(curr) {
        if (!curr) return;
        traversal(curr.left);
        ans.push(curr.val);
        traversal(curr.right);
    }
    traversal(root);
    return ans;
};




// Method Second ---withour recursion 

var inorderTraversal= (root) => {
    if (!root) return [];

    let stack = [];
    let ans = [];

    let curr = root;


    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;

        }
        curr = stack.pop();
        ans.push(curr);
        curr = curr.right;



    }


    return ans;
}
inorderTraversal()


// Problem Statement:
//  3. Given the root of a binary tree, return the postorder traversal of its nodes’ values..
// postOrder--->left-->right--->root
// Examples:
// Example 1:
// Input: root = [1,null,2,3]

// Output: [3,2,1]


var postOrderTraves = function (root) {

    let ans = [];
    function traversal(curr) {
        traversal(curr.left);
        traversal(curr.right);
        ans.push(curr.val);
    }

    traversal(root);
    return ans;
}




// =================4. Level Order Traversal - with Recursion - BFS============

// dfs(node, level)

// 1. create level array if needed
// 2. add node value
// 3. go left (level+1)
// 4. go right (level+1)
var levelOrderTraversal = (root) => {
    if (!root) return [];
    let ans = [];
    let traversal = (curr, level) => {
        if (!ans[level]) ans[level] = [];
        ans[level].push(curr.val);
        curr.left && traversal(curr.left, level + 1);
        curr.right && traversal(curr.right, level + 1);
    }
    traversal(root, 0)


    return ans;
}

// =============5. maximum depth of binary tree=====


var maxDepth = (root) => {
    if (!root) return 0;

    let maxDepth = 0;
    let traversal = (curr, depth) => {
        maxDepth = Math.max(maxDepth, depth);

        curr.left && traversal(curr.left, depth + 1);
        curr.right && traversal(curr.right, depth + 1);
    }
    traversal(root, 1)

    return maxDepth;
}


// ============== 6.path sum of binary tree======


var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let ans = false;
    let traverse = (curr, currSum) => {
        let newSum = currSum + curr.val;
        if (!curr.left && !curr.right) {
            if (newSum === targetSum) {
                ans = ans || true;
            }
        }
        curr.left && traverse(curr.left, newSum);
        curr.right && traverse(curr.right, newSum);
    }
    traverse(root, 0);
    return ans;
};

// ============== 7.symmetric tree ======


var isSymmetric = function (root) {
    let isMirror = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left);
    }
    return isMirror(root.left, root.right);
};


// ===================8.invert binary tree============

var invertTree = function (root) {
    if (!root) return root
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
    return root;
};
