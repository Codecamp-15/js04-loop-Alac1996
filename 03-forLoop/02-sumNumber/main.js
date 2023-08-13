let sum = 0;
let sumOdd = 0;
let sumEven = 0;
let sumdiv3 = 0;
let sumtotal = 0;
for (n = 1; n <= 100; n++) {
  sum += n;
  if (n % 2 === 0) {
    sumEven += n;
  } else {
    sumOdd += n;
  }
  if (n % 3 === 0) {
    sumdiv3 += n;
  }
  sumtotal = sumEven ** 2 + sumdiv3 ** 2;
}

console.log(sum);
console.log(sumOdd);
console.log(sumEven);
console.log(sumdiv3);
console.log(sumtotal);
