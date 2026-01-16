



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

let result = binarSeach(arr, value);

console.log(result)
