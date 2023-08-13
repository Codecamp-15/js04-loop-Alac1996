let initialmoney = 100000;
let ATR = 2.5 / 100;
let years = 10;

for (let i = 1; i <= years; i++) {
  let interest = initialmoney * ATR;
  interest += initialmoney;
}
