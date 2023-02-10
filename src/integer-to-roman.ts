const dict = {
  // 2: "II",
  // 3: "III",
  // 6: "VI",
  // 7: "VII",
  // 8: "VIII",
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
};

function findConsist(num, i) {
  const temp = [];
  for (const key in dict) {
    if (num >= key && i <= key) {
      temp.push(key);
    }
  }
}

export function intToRoman(num: number): string {
  // console.log(1994 / 10);
  // console.log(Math.trunc(199.4));
  // console.log(1994 % 10);
  let i = 1;
  while (num) {
    const mod = num % 10;

    const current = mod * i;
    // console.log(dict[current]);

    if (!dict[current]) {
      console.log(current, i);
      findConsist(current, i);
    }

    num = Math.trunc(num / 10);
    i *= 10;
  }
  return "";
}
// MCMXCIV
console.log(intToRoman(378)); // CCCLXXVIII
