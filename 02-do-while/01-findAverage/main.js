let input;
let sum = 0;
let count = 0;
do {
  input = +prompt("Input");
  if (input === 0 || input.trim === "" || input === null) {
    break;
  }
  sum += input;
  count++;
} while (true);
