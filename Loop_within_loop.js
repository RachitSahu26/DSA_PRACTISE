
// for (let i=0; i<5; i++){
//     for(let j=0; j<5; j++){
//         console.log("*");
//     }
// }




// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < i; j++) {
//         console.log(i, j);
//     }
// }




// start pattern


// let n = 4;
// for (let i = 0; i < n; i++) {

//     let row = " "
//     for ( let j =0; j < n; j++) {
//         row = row + "*"


//     }
//     console.log(row);
// }
// =============================== 2.second start pattern ========================
//  *
//  **
//  ***
//  ****
//  *****
//  ******
//  *******
//  ********
//  *********
//  **********
////////////////////////////////////////////


// let number = 10;
// for (let i = 0; i < number; i++) {
//     let row = " ";
//     for (let j = 0; j < i + 1; j++) {
//         row = row + "*";

//     }
//     console.log(row);
// }


// ====================================== 3. start pattern =============================

//  1
//  12
//  123
//  1234
//  12345


// let number3=5;
//  for(let i=0; i<number3; i++){
//     row =" ";
//     for(let j=0; j<=i; j++){
//         row = row +(j+1);
//     }
//     console.log(row);
//  }


// ===================================== 4. start pattern ===========================


// let number4=5;
//  for(let i=0; i<number4; i++){
//     row =" ";
//     for(let j=0; j<=1; j++){
//         row = row +i;
//     }
//     console.log(row);
//  }



// =============================== 5. star pattern======================== 

// _________*
// ________**
// _______***
// ______****
// _____*****
// ____******
// ___*******
// __********
// _*********
// **********

// let number5 = 10;
// for (let i = 0; i < number5; i++) {
//     let row = "";
//     for (let j = 0; j < number5 - (i + 1); j++) {
//         row = row + ("");

//     }
//     for (let k = 0; k < i + 1; k++) {
//         row = row + "*";
//     }
//     console.log(row);
// }



// ================================= write a function that returns count of digit in number================================

// ========================there is also a corner case=================

// function countDigit(n) {

//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;

//     }
//     return count

// }

// let countNumber = 9992;
// let result = countDigit(countNumber);


// console.log(result);

// ==================================== 1.what if number has only one digit============================================


// function countDigit(n) {

//     if (n == 0) return 1;

//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }

// return count;
// }

// let number = 9;
// let result = countDigit(number)

// console.log(result);

// ==================================== what if the number has negative value========================


// function countDigit(n) {

//     if (n == 0) return 1;

// converting negative number to positive

//     n=Math.abs(n);
//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }

// return count;
// }

// let number = -9;
// let result = countDigit(number)

// console.log(result);





// ====================Reverse the integer if any negative number exist==================

function reverseIn(n) {
    let ncopy = n;

    n = Math.abs(n);
    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = (rev * 10) + rem;
       n = Math.floor(n / 10);
    }
    return (ncopy < 0) ? -rev : rev;


}

let num = 15421
let result = reverseIn(num)
console.log(result)