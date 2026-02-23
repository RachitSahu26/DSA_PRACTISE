



// =============== 1. Binary search=========



function binarSeach(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let midddle = Math.floor((left + right) / 2);
        if (target === nums[midddle]) {
            return midddle;

        } else if (target < nums[midddle]) {
            right = midddle - 1;
        }
        else {
            left = midddle + 1;
        }
    }
    return -1;
}
let arr = [1, 2, 3, 5, 6, 7, 9, 10, 15]



// =====================remove dublicate in not sorted array==============
var findDuplicate = function (nums) {
    let left = 1;
    let right = nums.length - 1; // n

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;

        // count how many numbers are <= mid
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) {
                count++;
            }
        }

        if (count > mid) {
            // duplicate is in left half
            right = mid;
        } else {
            // duplicate is in right half
            left = mid + 1;
        }
    }

    return left;
};

let value = 15





// find sqrt of the given number 
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

var mySqrt = function (x) {
    if (x < 2) return x;

    let left = 2;
    let right = Math.floor(x / 2);

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (middle * middle === x) {
            return middle;
        }
        else if (middle * middle > x) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }

    return right; // floor of sqrt(x)
};


let result = binarSeach(arr, value);

console.log(result)









// ===============3. First Bad Version===============
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
   return function(n) {
        let l = 1;
        let r = n;
        while (l < r) {
            let m = l + Math.floor((r - l) / 2);
            if (!isBadVersion(m)) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return r;
    };
};


// ================= 4. Search in Rotated Sorted Array===============

var search = function(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (target === arr[m]) {
            return m;
        }
        
        if (arr[l] <= arr[m]) {
            if (target >= arr[l] && target < arr[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (target > arr[m] && target <= arr[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
};



// ============== 5. Find K Closest Elements===============

var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - k;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if ((arr[m + k] - x) < (x - arr[m])) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    let ans = [];
    for(let i = l; i < l + k; i++) {
        ans.push(arr[i]);
    }
    return ans;
};
