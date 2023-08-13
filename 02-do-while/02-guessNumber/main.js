let ansNumber = "";
let isEmpty;
let isNan;

do {
  ansNumber = prompt("Enter your magic number") || ""; //ทำเพื่อดักnull (null || '' )= ''  => F or F get last F
  isEmpty = ansNumber.trim() === "";
  isNan = isNaN(ansNumber);
  outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
  if (isEmpty || isNan) {
    alert("Invalid Number,Try 1-99");
  } else if (outOfRange) {
    alert("Invalid Range,Try 1-99");
  }
} while (isEmpty || isNan);

//Program 2 : Guess

let guessNumber;
let count = 0;
do {
  guessNumber = prompt("Enter your answer") || "";
  isEmpty = guessNumber.trim() === "";
  isNan = isNaN(guessNumber);
  outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
  count++;
  if (isEmpty || isNan) {
    alert(`Invalid Number,Try 1-99,Round${count}/10`);
  } else if (outOfRange) {
    alert(`Invalid Range,Try 1-99,Round${count}/10`);
  } else if (+guessNumber < +ansNumber) {
    alert(`Too low,Round${count}/10`);
  } else if (+guessNumber > +ansNumber) {
    alert(`Too high,Round${count}/10`);
  } else if (+guessNumber == +ansNumber) {
    alert("Correct");
  }
  if (count == 10) {
    alert("You fail!!");
    break;
  }
} while (+guessNumber != +ansNumber);

//ทายได้ไม่เกิน n ครั้ง
