
// ..............reverse the String...............
// function reverseString(name) {
//     let reversed = "";

//     for (let i = name.length - 1; i >= 0; i--) {
//         reversed += name[i]
//     }
//     return reversed;

// }
// console.log(reverseString("Rachit"))



// ...............palindrome............

// function palindrome(check) {
//     let left = 0;
//     let right = check.length - 1;
//     while (left < right) {
//         if (left[check] !== right[check]) {
//             return false;
//         }
//         left++;
//         right--;

//     }

//     return true;


// }

// console.log(palindrome("Rachit"))


// ............character frequency............

// function characterCount(name) {

//     let frq = {};
//     for (let i = 0; i < name.length; i++) {
//         let ch = name[i];
//         if (frq[ch] === undefined) {
//             frq[ch] = 1;

//         } else {
//             frq[ch]++
//         }

//     }

//     return frq
// }

// console.log(characterCount("RacRiDDeveooopeR"))



// ....................4 First Non-Repeating Character.....





// ..................check dublicate................
function checkDuplicate(str) {
    let seen = {};

    for (let i = 0; i < str.length; i++) {
        if (seen[str[i]]) {
            console.log(str[i], "is duplicate");
        } else {
            seen[str[i]] = true;
            console.log(str[i], "is not duplicate");
        }
    }
}

checkDuplicate("Rachitta");


// ===============remove all the sring paragraph================
var reverseWords = function(s) {
    // split by space
    let words = s.split(" ");

    // filter out empty strings
    let filtered = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            filtered.push(words[i]);
        }
    }

    // reverse words
    let left = 0;
    let right = filtered.length - 1;
    while (left < right) {
        let temp = filtered[left];
        filtered[left] = filtered[right];
        filtered[right] = temp;
        left++;
        right--;
    }

    // join with single space
    return filtered.join(" ");
};





// Roman to Integer
var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = map[s[i]];
        let next = map[s[i + 1]];

        if (next && curr < next) {
            result -= curr;
        } else {
            result += curr;
        }
    }

    return result;
};



// Submissions Detail -
// Remove Palindromic Subsequences?


var removePalindromeSub = function(s) {
    // If string is empty, no steps needed
    if (s.length === 0) return 0;

    // Check if the string itself is a palindrome
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // Not a palindrome → need 2 steps
            return 2;
        }
        left++;
        right--;
    }

    // Whole string is a palindrome → 1 step
    return 1;
};





// ===================== 5 reverse the whole string paragraph========================
var reverseWords = function (s) {
    // split by space
    let words = s.split(" ");

    // filter out empty strings
    let filtered = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            filtered.push(words[i]);
        }
    }

    // reverse words
    let left = 0;
    let right = filtered.length - 1;
    while (left < right) {
        let temp = filtered[left];
        filtered[left] = filtered[right];
        filtered[right] = temp;
        left++;
        right--;
    }

    // join with single space
    return filtered.join(" ");
};



// ============== 6 Length of Last Word===========

// ---------- 1-approach--------

var lengthOfLastWord = function (s) {
    let n = s.length - 1;
    while (n >= 0) {
        if (s[n] === " ") {
            --n;
        } else {
            break;
        }
    }
    let count = 0;
    while (n >= 0) {
        if (s[n] != " ") {
            --n;
            ++count;
        } else {
            break;
        }
    }
    return count;
};

// ---------- 2-approach--------
var lengthOfLastWords = function (s) {
    let n = s.length - 1;
    let count = 0;

    while (n >= 0) {
        if (s[n] != " ") {
            count++
        } else if (count > 0) {
            break;
        }
        --n;
    }
    return count;
}


// ============== 6 Find words that is containing words ===========


// approach 1 using build in method of js
var findWordsContaining = function (words, targetVal) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(targetVal)) {
            result.push(i);

        }
    }
    return result;

}

// -----------approach 2----------

var findWordsContaining = function (words, targetv) {
    let res = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; i < words[i].length; j++) {
            if (words[i][j] === targetv) {
                res.push[i];
                break;
            }
        }
    }
    return res;

}



// ================ 9. Jewels and Stones=============

var numJewelsInStones = function(jewels, stones) {
    let count=0;
    for(let i =0; i<stones.length; i++){
        if(jewels.includes(stones[i])){
            count++;
        }
    }
    return count;
};






// ==================== 10 find the most frequent vowel and consonant==============

var maxFreqSum = function (s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        }
        else {
            ++map[s[i]];
        }
    }
    let maxVowel = 0;
    let maxConsonant = 0;
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < s.length; i++) {
        if (vowel.includes(s[i])) {
            if (map[s[i]] > maxVowel) {
                maxVowel = map[s[i]];
            }
        } else {
            if (map[s[i]] > maxConsonant) {
                maxConsonant = map[s[i]];
            }
        }

    }
    return maxVowel + maxConsonant;

};







// ==================== 11 Split a String in Balanced Strings====================

var balancedStringSplit = function (s) {

    let R = 0;
    let L = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") {

            ++R;
        } else {
            ++L;
        }

        if (R === L) {
            count++;
            R = 0;
            L = 0;
        }
    }

    return count;

};




// ==================12 valid anagram============

var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let map = {};
    for (let i = 0; i < s.length; i++) {

        if (map[s[i]] === undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (map[t[j]] === undefined || map[t[j]] === 0) {


            return false
        }
        else {
            map[t[j]]--;
        }
    }


    return true;

}



    

// ==================13  Largest Odd Number in String============

var largestOddNumber = function(num) {
    let n=num.length-1;
    while(n>=0){
        if(num[n]%2===1){
            return num.substring(0,n+1);
        }
        --n;
    }
    return "";
};



// ==================14 Longest Common Prefix ============


var longestCommonPrefix = function(strs) {
    let x=0;
    while(x<strs[0].length){
        let ch=strs[0][x];
        for(let i=1; i<strs.length; i++){
            if(ch!=strs[i][x] || x==strs[i].length){
                return strs[0].substring(0,x);
            }
        }
        x++
    }
    return strs[0]
};



// ==================14 Longest balanced substring || ============


