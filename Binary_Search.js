



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
let value = 15

let result = binarSeach(arr, value);
console.log(result)