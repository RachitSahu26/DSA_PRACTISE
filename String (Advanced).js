// ===============================
// String Question 1: Reverse a String
// ===============================

// Example:
// Input:  s = "hello"
// Output: "olleh"


// --------------------------------
// First Approach: Built-in Method
// --------------------------------
function reverseStringBuiltIn(s) {
    return s.split("").reverse().join("");
}

// Time: O(n)
// Space: O(n)


// --------------------------------
// Second Approach: Two Pointers (BEST)
// --------------------------------
function reverseStringTwoPointers(s) {
    let arr = s.split("");  // "R", "A", "C", "H", "I", "T"
    let left = 0;  // left start with R--> 0,1,2,,3,4,5,
    let right = arr.length - 1;  // right will start from T which is the last element of the array

    while (left < right) { // if if 0(R) <5(T)
        [arr[left], arr[right]]  /*    then swap it with left to right */  = [arr[right], arr[left]]; /*    then swap it with right to  left */
        left++;  /* after that left should be increase from 0 to 1 */
        right--; /* and right should be descrease from 5 to 4 */
    }

    return arr.join(""); //after the end joined the arr 
}

// Time: O(n)
// Space: O(n)





// ===============================
// String Question 2: Valid Palindrome
// ===============================

// Example:
// Input:  s = "A man, a plan, a canal: Panama"
// Output: true


// --------------------------------
// First Approach: Clean String + Reverse
// --------------------------------
function isPalindromeSimple(s) {
    let clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return clean === clean.split("").reverse().join("");
}

// Time: O(n)
// Space: O(n)


// --------------------------------
// Second Approach: Two Pointers (BEST)
// --------------------------------
function isPalindromeTwoPointers(s) {
    let clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = clean.length - 1;

    while (left < right) {
        if (clean[left] !== clean[right]) return false;
        left++;
        right--;
    }

    return true;
}

// Time: O(n)
// Space: O(1)







// ===============================
// String Question 3: Valid Anagram
// ===============================

// Example:
// Input:  s = "anagram", t = "nagaram"
// Output: true


// --------------------------------
// First Approach: Sorting
// --------------------------------
function isAnagramSort(s, t) {
    if (s.length !== t.length) return false;

    return s.split("").sort().join("") === t.split("").sort().join("");
}

// Time: O(n log n)
// Space: O(n)


// --------------------------------
// Second Approach: Hash Map (BEST)
// --------------------------------
function isAnagramMap(s, t) {
    if (s.length !== t.length) return false;

    let map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!map.has(char)) return false;
        map.set(char, map.get(char) - 1);
        if (map.get(char) === 0) map.delete(char);
    }

    return map.size === 0;
}

// Time: O(n)
// Space: O(n)






// ===============================
// String Question 4: Longest Common Prefix
// ===============================

// Example:
// Input:  strs = ["flower","flow","flight"]
// Output: "fl"


// --------------------------------
// First Approach: Compare Character by Character
// --------------------------------
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Time: O(n * m)
// Space: O(1)








// ===============================
// String Question 5: Longest Substring Without Repeating Characters
// ===============================

// Example:
// Input:  s = "abcabcbb"
// Output: 3  ("abc")


// --------------------------------
// First Approach: Sliding Window + Set (BEST)
// --------------------------------
function lengthOfLongestSubstring(s) {
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

// Time: O(n)
// Space: O(n)






// ===============================
// String Question 6: Implement strStr()
// ===============================

// Example:
// Input:  haystack = "hello", needle = "ll"
// Output: 2


// --------------------------------
// First Approach: Brute Force
// --------------------------------
function strStr(haystack, needle) {
    if (needle === "") return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) return i;
    }

    return -1;
}

// Time: O(n * m)
// Space: O(1)







// ===============================
// String Question 7: Count and Say
// ===============================

// Example:
// Input:  n = 4
// Output: "1211"


// --------------------------------
// First Approach: Iterative Build
// --------------------------------
function countAndSay(n) {
    let result = "1";

    for (let i = 2; i <= n; i++) {
        let temp = "";
        let count = 1;

        for (let j = 1; j < result.length; j++) {
            if (result[j] === result[j - 1]) {
                count++;
            } else {
                temp += count + result[j - 1];
                count = 1;
            }
        }

        temp += count + result[result.length - 1];
        result = temp;
    }

    return result;
}

// Time: O(n * m)
// Space: O(m)







// ===============================
// String Question 8: Longest Palindromic Substring
// ===============================

// Example:
// Input:  s = "babad"
// Output: "bab"  (or "aba")


// --------------------------------
// First Approach: Expand Around Center (BEST)
// --------------------------------
function longestPalindrome(s) {
    if (s.length < 2) return s;

    let start = 0, maxLen = 1;

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i);       // Odd length
        expand(i, i + 1);   // Even length
    }

    return s.substring(start, start + maxLen);
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)





// ===============================
// String Question 9: Group Anagrams
// ===============================

// Example:
// Input:  strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]


// --------------------------------
// First Approach: Sorting + Hash Map (BEST)
// --------------------------------
function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        let key = str.split("").sort().join("");
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }

    return Array.from(map.values());
}

// Time Complexity: O(n * k log k)
// Space Complexity: O(n)







// ===============================
// String Question 10: String to Integer (atoi)
// ===============================

// Example:
// Input:  s = "   -42"
// Output: -42


// --------------------------------
// First Approach: Parsing with Rules
// --------------------------------
function myAtoi(s) {
    let i = 0;
    let sign = 1;
    let result = 0;

    while (i < s.length && s[i] === " ") i++;

    if (s[i] === "-" || s[i] === "+") {
        sign = s[i] === "-" ? -1 : 1;
        i++;
    }

    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        result = result * 10 + (s[i] - "0");
        i++;
    }

    return sign * result;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
