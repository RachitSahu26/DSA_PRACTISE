
// ======================== 1.Find the Index of the First Occurrence in a String=================

// function strStr(haystack, needle) {
//   // Edge case: empty needle
//   if (needle === "") return 0;

//   // Loop through haystack
//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     let j = 0;

//     // Check character by character
//     while (j < needle.length && haystack[i + j] === needle[j]) {
//       j++;
//     }

//     // If we matched the whole needle
//     if (j === needle.length) {
//       return i;
//     }
//   }

//   return -1;
// }



// ***************type 1*********************
// fixed sized for 2 questions
// *****************************************





// ======================== 2.Maximum sum subarray of size K=================
// nums = [2, 1, 5, 1, 3, 2]
// K = 3
// Output = 9   → [5,1,3]

var maximu = function (nums, k) {
    let m = nums.length;
    let maxSum = 0;

    for (let i = 0; i <= m - k; i++) {  
        let window = nums.slice(i, i + k); // ✅ slice for array
        let sum = 0;


        for (let j = 0; j < window.length; j++) {
            sum += window[j];
        }
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

let numbers = [1, 2, 3, 4, 5, 6];
let co = 3;

let result = maximu(numbers, co);
console.log(result);



// ======================== 3.Average of subarrays of size K=================
// nums = [1, 3, 2, 6, -1, 4, 1, 8, 2]
// K = 5
// Output = [2.2, 2.8, 2.4, 3.6, 2.8]



// 🧠 What to lock in your brain

// First k-1 steps → just build window

// From i = k-1 → window is ready

// Every step:

// add right

// calculate

// remove left


// One-line memory rule

// Fixed-size window → build first, then slide
function averageOfSubarrays(nums, k) {
  let windowSum = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    windowSum += nums[i];   // add right element

    if (i >= k - 1) {
      result.push(windowSum / k);  // calculate average
      windowSum -= nums[i - (k - 1)]; // remove left element
    }
  }

  return result;
}

// Test
console.log(averageOfSubarrays([1,3,2,6,-1,4,1,8,2], 5));






// // ***************type 2*********************
// TYPE 2 — VARIABLE SIZE (NO DUPLICATES)
// What “variable size” means (10-year-old level)

// Window can grow

// Window can shrink

// Size is not fixed

// We change size to follow a rule


// ****************************************
// ============== 1.Longest substring without repeating characters================
// s = "abcabcbb"
// Output = 3   // "abc"

function longestUniqueSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}




// ============== 2.Longest substring with AT MOST K distinct characters============

// s = "eceba"
// k = 2
// Output = 3   // "ece"

function longestSubstringKDistinct(s, k) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) {
        map.delete(s[left]);
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
