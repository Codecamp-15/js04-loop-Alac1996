// for (let l = 1; l <= 4; l++) {
//   let str = "";
//   for (let s = 1; s <= l; s++) {
//     str += "*";
//   }
//   console.log(str);
// }

let str = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    if (j <= i) str += "*";
  }
  str += "\n";
}

console.log(str);
