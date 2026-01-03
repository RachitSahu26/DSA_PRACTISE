
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
