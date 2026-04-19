
// ======================== 1.Find the Index of the First Occurrence in a String=================

function strStr(haystack, needle) {
  // Edge case: empty needle
  if (needle === "") return 0;

  // Loop through haystack
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;

    // Check character by character
    while (j < needle.length && haystack[i + j] === needle[j]) {
      j++;
    }

    // If we matched the whole needle
    if (j === needle.length) {
      return i;
    }
  }

  return -1;
}



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




// ============== vaiation 2.Longest substring with AT MOST K distinct characters============

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

// s = "eceba"
function lengthOfLongestSubstring(s) {
    let set = new Set(); //1.empty 
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) { //1 e // 2c
        while (set.has(s[right])) { //1. no element stored //2. no elemnt stored
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]); // 1[e] //2[ec]
        maxLength = Math.max(maxLength, right - left + 1); // 1 maxlength=1
    }

    return maxLength;
}





// ======================= variation 2.longest substring at most k distinct character==========

// s = "eceba"
// k=2
function longestSubstringKDistinct(s, k) {
    let freq = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        if (freq[char] === undefined) {
            freq[char] = 1;
        } else {
            freq[char]++;
        }

        while (Object.keys(freq).length > k) {
            freq[s[left]]--;

            if (freq[s[left]] === 0) {
                delete freq[s[left]];
            }

            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


// =================== variation 3.Longest Substring With Exactly K Distinct Characters==================

function longestSubstringExactlyKDistinct(s, k) {
    let freq = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        if (freq[char] === undefined) {
            freq[char] = 1;
        } else {
            freq[char]++;
        }

        while (Object.keys(freq).length > k) {
            freq[s[left]]--;

            if (freq[s[left]] === 0) {
                delete freq[s[left]];
            }

            left++;
        }

        if (Object.keys(freq).length === k) {
            maxLength = Math.max(maxLength, right - left + 1);
        }
    }

    return maxLength;
}


// ================ variation 4.Longest Repeating Character Replacement=====================


 var characterReplacement = function(s, k) {
    let i = 0, j = 0;
    let map = Array(26).fill(0);
    map[s.charCodeAt(0) - 65] = 1;
    let maxWindow = 0;
    while (j < s.length) {
        if (isWindowValid(map, k)) {
            maxWindow = Math.max(maxWindow, j - i + 1);
            ++j;
            ++map[s.charCodeAt(j) - 65];
        } else {
            --map[s.charCodeAt(i) - 65];
            ++i;
        }
    }
    return maxWindow;  
};
var isWindowValid = function(map, k) {
    let totalCount = 0;
    let maxCount = 0;
    for (let i = 0; i < 26; i++) {
        totalCount += map[i];
        maxCount = Math.max(maxCount, map[i]);
    }
    return (totalCount - maxCount <= k);
};
 


// ==================== 3 Smallest subarray with sum ≥ K========================
// nums = [2, 3, 1, 2, 4, 3]
// K = 7
// Output = 2



function smallestSubarraySum(nums, k) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; // expand window

    while (sum >= k) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left]; // shrink window
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}


// ==================== 4.Longest subarray with at most 2 zeros ====================

// nums = [1,1,1,0,0,1,1,0,1]
// k = 2
// Output = 7

function longestSubarrayAtMostKZeros(nums, k) {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

for (let right = 0; right < nums.length; right++) {

    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}




// ======== 5.Longest substring containing only 1’s after replacing at most K zeros.===
// Why This Is Type 2

// Window size not given

// Longest asked

// Rule: zeros ≤ K

// That’s variable sliding window.
// nums = [1,0,1,1,0,0,1,1]
// K = 2
// 1,1,1,1,1




function longestOnes(nums, k) {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
 //right =5
    // If current element is 0, increase zero count
    if (nums[right] === 0) {
      zeroCount++;
    //  count 3
    }


    
    // If zeros exceed k, shrink window
    while (zeroCount > k) { // 3>2
      if (nums[left] === 0) { //left=1
        zeroCount--; // count =2
      }
      left++;
    }

    // Update maximum window length
    maxLen = Math.max(maxLen, right - left + 1);
    //maxlen=5
  }

  return maxLen;
}

// ======== 6.Subarray Product Less Than K=========
// nums = [10, 5, 2, 6]
// k = 100
// Output = 8



function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) return 0;

  let left = 0;
  let product = 1;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (product >= k) {
      product /= nums[left];
      left++;
    }

    count += right - left + 1;
  }

  return count;
}



//==============7. Minimum Window Substring===============

function minWindow(s, t) {
  if (t.length > s.length) return "";

  let need = new Map();
  for (let ch of t) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }

  let left = 0;
  let count = t.length;
  let minLen = Infinity;
  let start = 0;

  for (let right = 0; right < s.length; right++) {
    if (need.has(s[right])) {
      if (need.get(s[right]) > 0) count--;
      need.set(s[right], need.get(s[right]) - 1);
    }

    while (count === 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }

      if (need.has(s[left])) {
        need.set(s[left], need.get(s[left]) + 1);
        if (need.get(s[left]) > 0) count++;
      }
      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(start, start + minLen);
}
