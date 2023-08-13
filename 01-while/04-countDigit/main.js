let n = +prompt("Enter number");

let count = 0;
while (n >= 1) {
  console.log(n);
  count++;
  n = n / 10;
}

console.log(count);
