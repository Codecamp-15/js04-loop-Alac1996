let str = "";
for (let l = 0; l <= 8; l++) {
  for (let n = 1; n <= l; n++) {
    // if (n <= l) str += n;
    str += n;
  }
  str += "\n";
}
console.log(str);
