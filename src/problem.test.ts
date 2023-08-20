const charMap = [
  "Z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y"
];

const base = 26;
function baseN(num: number) {
  let str = "",
    r = 0;

  while (num) {
    (r = num % base), num--;
    num = Math.trunc(num / base);

    str = charMap[r] + str;
  }
  return str;
}
console.log(baseN(703));
