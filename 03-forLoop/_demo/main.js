// console.log("learn counting loop");

// console.log("starting.......");
// () = parenthesis
// {} = bracket = ปีกกา
// [] = square bracket = ก้ามปู

// for (let i = 0; i < 3; i++) {
//   console.log(" >> Hello");
//   console.log(" >>>> Codecamp");
// }

// console.log("end...");

// EX2 : Fizzbuzz
// for (let i = 1; i <= 20; i = i++) {
//   if(i % 3 == 0 && i % 5 ==0) console.log('Fizzbuzz');
//   else if (i % 5 == 0) console.log('Buzz');
//   else if (i % 3 == 0) console.log('Fizz');
//   else console. log(i);
// }

// console.log("end.....");

//EX3B :
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) console.log(i);
//   else continue; // update ค่า และเรื่มต้น loop รอบถัดไป

//   console.log("even");
// }

//EX4 : Concat String

// let str = "";

// for (let i = 1; i <= 10; i++) {
// Guard
// if (i % 3 == 0) continue;
// str += i;
// "" + 1 => "1"
// "1" + 2 => "12"
// }

// console.log(str); // "12345678910"

//EX5 : remove vowel (a,e,i,o,u)

// src.length ==> 8
// src.[0] ==>
// console.log("end....");

// ```js
// // EX3B :
// // for (let i = 1; i <= 20; i++) {
// //     // i = 2 log(2), log(even)
// //     if (i % 2 == 0) console.log(i);
// //     else continue; // update ค่า และเริ่มรัน loop รอบถัดไป
// //     console.log('even');
// // }

// // EX4 : Concat String

// // let str = '';

// // for (let i = 1; i <= 10; i++) {
// //     // Guard
// //     if (i % 3 == 0) continue;
// //     str += i;
// //     // "" + 1 => "1"
// //     // "1" + 2 => "12"
// // }
// // console.log(str); // "12345678910"

// // EX5 : remove vowel (a,e,i,o,u)

// let src = 'codecamp';
// let res = ''; // cdcmp

// // src.length ==> 8
// // src[0] ==> c
// // src[1] ==> o

// for (let i = 0; i < src.length; i++) {
//     // console.log(i, src[i]);
//     let c = src[i];
//     if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') continue;
//     res = res + src[i];
//     // '' + src[0] == '' + 'c' => 'c'
//     // 'c' + src[1] == 'c' + 'o' => 'co'
// }

// console.log(res);
// ```;

//PROGRAM-1 : Input User 1

// let ansNumber = prompt("Enter your magic number"); // => null,string : "", "   ", "quwere", "12"

// ansNumber === null || ansNumber.trim() ==="" || isNaN(ansNumber)

// let isNull = ansNumber === null;
// let isEmpty = ansNumber === "";
// let isNaN = isNaN(ansNumber);
// let isValid = ansNumber == null || ansNumber.trim() === "" || isNaN(ansNumber);
// let outOfRang = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >= 1 && Number(ansNumber) <= 99;

// if (isValid) {
//   alert("Invalid Input");
// } else if (outOfRang) {
//   alert("Invalid Range");
// } else if (isINRange) {
//   alert("try to guess number"); // Program : player 2
// }

// V2 : รับ Input  ได้เรื่อยๆจนกว่าจะพิมพ์ถูก / แต่ให้กด  esc เพื่อจบโปรแกรมได้

// let ansNumber = "";
// let isEmpty;
// let isNan;
// let outOfRange;
// let guessNumber;

// do {
//   ansNumber = prompt("Enter your magic number") || ""; //  null || ""

//   //   if(ansNumber !== null){
//   isEmpty = ansNumber.trim() === "";
//   isNan = isNaN(ansNumber);
//   outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
//   if (isEmpty || isNan) {
//     alert("Invalid Input. Try 1-99");
//   } else if (outOfRange) {
//     alert("Invalid Range, Try 1-99");
//   } else if (+guessNumber > +ansNumber) {
//     alert("too high");
//   } else if (+guessNumber < +ansNumber) {
//     alert("too low");
//   } else if (+guessNumber == +ansNumber) {
//     alert("correct");
//   }
// } while (isEmpty || isNan);

// Program 2 : Guess
// - ทายซ้ำ
// - Hint OutOfRange
// - Hint Invalid Range
// - Hint too High, too low
// - Alert Correct

// do {
//   guessNumber = prompt("Enter your guess number") || "";
//   isEmpty = ansNumber.trim() === "";
//   isNan = isNaN(ansNumber);
//   outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
//   if (isEmpty || isNan) {
//     alert("Invalid Input. Try 1-99");
//   } else if (outOfRange) {
//     alert("Invalid Range, Try 1-99");
//   } else if (+guessNumber > +ansNumber) {
//     alert("too high");
//   } else if (+guessNumber < +ansNumber) {
//     alert("too low");
//   } else if (+guessNumber == +ansNumber) {
//     alert("correct");
//   }
// } while (+guessNumber != +ansNumber);

// for (let n = 2; n <= 100; n++) {
//   let isPrime = true;
//   for (let divider = 2; divider < n; divider++) {
//     if (n % divider == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) console.log(n);
// }
