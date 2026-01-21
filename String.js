
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
