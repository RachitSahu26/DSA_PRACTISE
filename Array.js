


/* 
function reverArray(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right]
        arr[right] = temp

        left++
        right--
    }
    return arr
}
console.log(reverArray([2, 3, 4, 5, 7, 6]));


// 2 question...................?
function twoSum(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            console.log(`this this number which is matched with target${sum}`
            )
        }
        else if (sum < target) left++;
        else right--;


    }
    return false;

}

console.log(twoSum([3, 5, 25, 4, 5], 10))
 */
/* 
2....Check if Array Contains a Pair That Sums to Target */
/* function twoSum(arr, target) {
    // Sort because two pointer works on sorted array
    arr = arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            console.log(
              `🎯 Found target! ${arr[left]} + ${arr[right]} = ${target}`
            );
            return true;
        }
        else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    console.log("❌ No pair found");
    return false;
}

console.log(twoSum([3, 5, 25, 4, 5], 10)); */






/* 3. All Zeroes to End */
/* function shiftAllZeros(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;

        }

    }

    while (index < arr.length) {
        arr[index] = 0;
        index++;
    }
    return arr;

}

console.log(shiftAllZeros([3, 4, 6, 0, 6, 0, 3, 86, 0, 98])) */


/* 4. prefix some  */




// .........................second largest number .................
// function findSecondLargest(arr) {
//     let first = -Infinity;
//     let second = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second) {
//             second = arr[i];

//         }

//     }

//       return second;

// }

// let demoArray = [2, 3, 5, 12, 66, 145, 65]
// let result = findSecondLargest(demoArray);
// console.log(result);

// =================corner case==============


// 1.what if array is empty

// 2.what if array has negative number
// 3.what if array has dublicate value
// 4.what if array has only one element



// these are the corner cases whenever you solve any array question you need to think about the corner cases of it
// if in the array some element would be dublicate and i need to change something 
// function findSecondLargest(arr) {
//     let first = -Infinity;
//     let second = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second && arr[i]!=first) {
//             second = arr[i];

//         }

//     }

//       return second;

// }

// let demoArray = [2, 3,66, 5, 12, 145, 145, 65]
// let result = findSecondLargest(demoArray);
// console.log(result);

//4. if array has only one element  then  how will you handle it and find seocnd largest

// function findSecondLargest(arr) {

//     if(arr.length<2){
//         return null;
//     }
//     let first = -Infinity;
//     let second = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second && arr[i]!=first) {
//             second = arr[i];

//         }

//     }

//       return second;

// }

// let demoArray = [10]
// let result = findSecondLargest(demoArray);
// console.log(result);




// ==============dublicate the array============



// function dublicateArr(nums) {
//     let x = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > nums[x]) {
//             x = x + 1;
//             nums[x] = nums[i]
//         }
//     }
//     return x + 1;
// }

// let arr = [1, 1, 1, 2, 2, 3, , 4, 5, 7, 7]
// let result = dublicateArr(arr)
// console.log(result);


// ============================Reverse the Array of string=======================
function ReverseString(nums) {
    let n=nums.length
let halfN=Math.floor(n/2);
    for (let i = 0; i < halfN; i++) {
        let temp =nums[i] ;

            nums[i] = nums[n - 1 - i]
            nums[n - 1 - i] = temp;

        
    }
    return nums;
}

let arr = ["R", "A", "C", "H", "I", "T"]
let result = ReverseString(arr)
console.log(result)