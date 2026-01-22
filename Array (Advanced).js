



// ===============================================================
//   1.  Two Sum can be solved in 3 main ways: Brute Force, Hash Map, and Two Pointers (after sorting).
// ============================================
// input--[2,4,5,6,7,8], target 9
// output---[1, 2]
// Method 1: Brute Force
function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {   //        i->0,1,2,3,4,5
    for (let j = i + 1; j < nums.length; j++) {   //  j->1,2,3,4,5

      if (nums[i] + nums[j] === target) return [i, j]; //1. 2+4===9  false if  2. 4+5===9 true
      
    }
  }
  return []; //[i,j]=>[1,2]
}
// input--[2,4,5,6,7,8], target 9
// Method 2: Hash Map (One Pass)
function twoSumHash(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) return [map.get(need), i];
    map.set(nums[i], i);
  }
  return [];
}

// Method 3: Two Pointers (After Sorting)
function twoSumTwoPointers(nums, target) {
  const arr = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
  let l = 0, r = arr.length - 1;
  while (l < r) {
    const sum = arr[l][0] + arr[r][0];
    if (sum === target) return [arr[l][1], arr[r][1]];
    sum < target ? l++ : r--;
  }
  return [];
}





// ===============================================================
//  2.✅ Best Time to Buy and Sell Stock — ALL 3 METHODS (Code)
// ============================================
// 1.Brute Force (Basic understanding)

function maxProfitBrute(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
    }
  }

  return maxProfit;
}

// Time: O(n²)

// Space: O(1)



// Method 2: Single Pass (MOST ASKED / BEST)

function maxProfitSinglePass(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;

 }

// Time: O(n)

// Space: O(1)

// 👉 This is the method you MUST master



// Method 3: Kadane’s Algorithm Style


function maxProfitKadane(prices) {
  let currentProfit = 0;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    currentProfit = Math.max(0, currentProfit + prices[i] - prices[i - 1]);
    maxProfit = Math.max(maxProfit, currentProfit);
  }

  return maxProfit;
}
// Time: O(n)

// Space: O(1)





// ===============================================================
//  3.✅ Maximum Subarray
// ===========================================

// Problem:
// Given an integer array nums, find the contiguous subarray
// which has the largest sum and return its sum.


// --------------------------------
// First Approach: Brute Force
// --------------------------------
// Idea:
// Check all possible subarrays and calculate their sums.

function maxSubArrayBrute(nums) {
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)


// --------------------------------
// Second Approach: Prefix Sum
// --------------------------------
// Idea:
// Track prefix sum and minimum prefix to calculate max subarray sum.

function maxSubArrayPrefix(nums) {
  let prefixSum = 0;
  let minPrefix = 0;
  let maxSum = -Infinity;

  for (let num of nums) {
    prefixSum += num;
    maxSum = Math.max(maxSum, prefixSum - minPrefix);
    minPrefix = Math.min(minPrefix, prefixSum);
  }

  return maxSum;
}

// Time Complexity: O(n)
// Space Complexity: O(1)


// --------------------------------
// Third Approach: Kadane’s Algorithm (MOST IMPORTANT)
// --------------------------------
// Idea:
// If current sum becomes negative, reset it.
// Always keep track of maximum sum.

function maxSubArrayKadane(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Time Complexity: O(n)
// Space Complexity: O(1)






// ===============================
// Array Question✅4: Merge Sorted Array
// ===============================

// Problem:
// Merge nums2 into nums1 as one sorted array.
// nums1 has extra space at the end.

// --------------------------------
// First Approach: Extra Array
// --------------------------------
function mergeExtra(nums1, m, nums2, n) {
  let arr = [];
  let i = 0, j = 0;

  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) arr.push(nums1[i++]);
    else arr.push(nums2[j++]);
  }

  while (i < m) arr.push(nums1[i++]);
  while (j < n) arr.push(nums2[j++]);

  for (let k = 0; k < m + n; k++) nums1[k] = arr[k];
}

// Time: O(m+n), Space: O(m+n)


// --------------------------------
// Second Approach: Two Pointers (In-place, BEST)
// --------------------------------
function mergeInPlace(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }
}

// Time: O(m+n), Space: O(1)








// ===============================
// Array Question✅ 5: Move Zeroes
// ===============================

// Problem:
// Move all 0s to the end while maintaining order.

// --------------------------------
// First Approach: Extra Array
// --------------------------------
function moveZeroesExtra(nums) {
  let arr = [];
  let zeroCount = 0;

  for (let num of nums) {
    if (num !== 0) arr.push(num);
    else zeroCount++;
  }

  while (zeroCount--) arr.push(0);

  for (let i = 0; i < nums.length; i++) nums[i] = arr[i];
}

// Time: O(n), Space: O(n)


// --------------------------------
// Second Approach: Two Pointers (BEST)
// --------------------------------
function moveZeroes(nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
}

// Time: O(n), Space: O(1)









// ===============================
// Array Question✅ 6: Rotate Array
// ===============================

// Problem:
// Rotate array to the right by k steps.

// --------------------------------
// First Approach: Extra Array
// --------------------------------
function rotateExtra(nums, k) {
  let n = nums.length;
  let arr = new Array(n);

  for (let i = 0; i < n; i++) {
    arr[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) nums[i] = arr[i];
}

// Time: O(n), Space: O(n)


// --------------------------------
// Second Approach: Reverse Method (BEST)
// --------------------------------
function rotate(nums, k) {
  k %= nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(arr, l, r) {
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
}

// Time: O(n), Space: O(1)





// ===============================
// Array Question✅7 : Contains Duplicate
// ===============================

// Problem:
// Return true if any value appears at least twice.

// --------------------------------
// First Approach: Sorting
// --------------------------------
function containsDuplicateSort(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }
  return false;
}

// Time: O(n log n), Space: O(1)


// --------------------------------
// Second Approach: Hash Set (BEST)
// --------------------------------
function containsDuplicate(nums) {
  let set = new Set();

  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}

// Time: O(n), Space: O(n)







// ===============================
// Array Question✅8: Product of Array Except Self
// ===============================

// Problem:
// Return array where each element is product of all except itself.

// --------------------------------
// First Approach: Prefix + Suffix Arrays
// --------------------------------
function productExceptSelfPrefix(nums) {
  let n = nums.length;
  let prefix = new Array(n).fill(1);
  let suffix = new Array(n).fill(1);
  let result = new Array(n);

  for (let i = 1; i < n; i++) prefix[i] = prefix[i - 1] * nums[i - 1];
  for (let i = n - 2; i >= 0; i--) suffix[i] = suffix[i + 1] * nums[i + 1];
  for (let i = 0; i < n; i++) result[i] = prefix[i] * suffix[i];

  return result;
}

// Time: O(n), Space: O(n)


// --------------------------------
// Second Approach: Optimized (BEST)
// --------------------------------
function productExceptSelf(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);
  let left = 1, right = 1;

  for (let i = 0; i < n; i++) {
    result[i] *= left;
    left *= nums[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}

// Time: O(n), Space: O(1)






// ===============================
// Array Question 9 ✅: Find Missing Number
// ===============================

// Problem:
// Given an array containing n distinct numbers taken from 0 to n,
// find the one number that is missing.

// --------------------------------
// First Approach: Sorting
// --------------------------------
function missingNumberSort(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }

  return nums.length;
}

// Time Complexity: O(n log n)
// Space Complexity: O(1)


// --------------------------------
// Second Approach: Sum Formula
// --------------------------------
// Idea:
// Expected sum = n * (n + 1) / 2
// Missing = expected sum - actual sum

function missingNumberSum(nums) {
  let n = nums.length;
  let expected = (n * (n + 1)) / 2;
  let actual = nums.reduce((sum, num) => sum + num, 0);

  return expected - actual;
}

// Time Complexity: O(n)
// Space Complexity: O(1)


// --------------------------------
// Third Approach: XOR Method (MOST ASKED)
// --------------------------------
// Idea:
// XOR all numbers from 0 to n and XOR with array elements

function missingNumberXOR(nums) {
  let xor = nums.length;

  for (let i = 0; i < nums.length; i++) {
    xor ^= i ^ nums[i];
  }

  return xor;
}

// Time Complexity: O(n)
// Space Complexity: O(1)







// ===============================
// Array Question ✅10: Majority Element
// ===============================

// Problem:
// Find the element that appears more than n/2 times.

// --------------------------------
// First Approach: Hash Map
// --------------------------------
function majorityElementMap(nums) {
  const map = new Map();
  let limit = Math.floor(nums.length / 2);

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > limit) return num;
  }
}

// Time Complexity: O(n)
// Space Complexity: O(n)


// --------------------------------
// Second Approach: Sorting
// --------------------------------
// Idea:
// Majority element will always be at middle index

function majorityElementSort(nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}

// Time Complexity: O(n log n)
// Space Complexity: O(1)


// --------------------------------
// Third Approach: Boyer–Moore Voting Algorithm (MOST IMPORTANT)
// --------------------------------
// Idea:
// Cancel out different elements, majority survives

function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

