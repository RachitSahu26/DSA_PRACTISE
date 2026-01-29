


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
//         } else if (arr[i] > second && arr[i] != first) {
//             second = arr[i];

//         }

//     }

//     return second;

// }

// let demoArray1 = [2, 3, 66, 5, 12, 145, 145, 65]
// let result7 = findSecondLargest(demoArray1);
// console.log(result7);

//4. if array has only one element  then  how will you handle it and find seocnd largest

// function findSecondLargest(arr) {

//     if (arr.length < 2) {
//         return null;
//     }
//     let first = -Infinity;
//     let second = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second && arr[i] != first) {
//             second = arr[i];

//         }

//     }

//     return second;

// }

// let demoArray = [10]
// let result2 = findSecondLargest(demoArray);
// console.log(result2);




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

// let arr3 = [1, 1, 1, 2, 2, 3, 4, 5, 7, 7]
// let result4 = dublicateArr(arr3)
// console.log(result4);


// ============================Reverse the Array of string=======================
// function ReverseString(nums) {
//     let n = nums.length
//     let halfN = Math.floor(n / 2);
//     for (let i = 0; i < halfN; i++) {
//         let temp = nums[i];

//         nums[i] = nums[n - 1 - i]
//         nums[n - 1 - i] = temp;


//     }
//     return nums;
// }

// let arr1 = ["R", "A", "C", "H", "I", "T"]
// let result = ReverseString(arr1)
// console.log(result)


//============================= buy the stock in the lowest price and sell it on maxprofit=================================
// function stockBuyAndSell(prices) {
//     let minProfit = prices[0];
//     let maxProfit = 0;
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] - minProfit > maxProfit) {
//             maxProfit = prices[i] - minProfit;
//         }
//         else if (minProfit > prices[i]) {
//             minProfit = prices[i];
//         }
//     }
//     return maxProfit;
// }

// let arr = [1, 3, 5, 7, 2, 8, 10]
// let result1 = stockBuyAndSell(arr);
// console.log(result1);




// .......................move Zeroes.....................

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]




// function moveZeroes(nums) {
//     let x = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[x] = nums[i];
//             x++;
//         }
//     }


//     for (let i = x; i < nums.length; i++) {
//         nums[i] = 0;
//     }
//     return nums;
// }
// let arr9 = [0, 1, 0, 3, 12]
// let result0=moveZeroes(arr9)
// console.log(result0);


// ====================max consecutive ones ===================


// const maxConsecutive = (nums) => {
//     let currentCount = 0;
//     let maxCount = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 1) {
//             currentCount++;
//         } else {
//             maxCount = Math.max(currentCount, maxCount);
//             currentCount=0;
//         }
//     }
//     return Math.max(currentCount, maxCount);
// }

// let arr4 = [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0]
// let result6 = maxConsecutive(arr4)
// console.log(result6);



// ====================two sum ==================
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

var twoSum = function (nums, target) {
  for(let i=0; i<nums.length; i++){
    for(let j=i+1;j<nums.length; j++){
        if(nums[i]+nums[j]===target){
            return [i,j];
        }
    }
  }
  };



// 11 Merge Sorted Array


var merge = function(nums1, m, nums2, n) {
let i = m - 1; // last valid element in nums1
let j = n - 1; // last element in nums2
let k = m + n - 1; // last position in nums1


// Merge from the back
while (j >= 0) {
if (i >= 0 && nums1[i] > nums2[j]) {
nums1[k] = nums1[i];
i--;
} else {
nums1[k] = nums2[j];
j--;
}
k--;
}
};
let arr = [2, 7, 11, 15]
let tar = 9
const result = twoSum(arr, tar)
console.log(result);
