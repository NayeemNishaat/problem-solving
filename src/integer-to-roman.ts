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

function findAddends(arr: number[]) {
  console.log(arr);
}

function findRange(num: number, i: number) {
  const range: number[] = [];
  for (const key in dict) {
    if (num >= +key && i <= +key) {
      range.push(+key);
    }
  }
  findAddends(range);
}

export function intToRoman(num: number): string {
  let i = 1;
  while (num) {
    const mod = num % 10;
    const current = mod * i;

    if (!dict[current]) findRange(current, i);

    num = Math.trunc(num / 10);
    i *= 10;
  }
  return "";
}

console.log(intToRoman(378)); // CCCLXXVIII
