const dict = {
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
let res = "";

function findAddends(range: number[], num: number) {
  const addends = new Map();

  let subtrahand = range.pop();
  while (num) {
    if (num < subtrahand) {
      subtrahand = range.pop();
      continue;
    }
    addends.set(
      subtrahand,
      addends.get(subtrahand) ? addends.get(subtrahand) + 1 : 1
    );

    num -= subtrahand;
  }

  let current = "";
  addends.forEach((val, key) => {
    current += "".padEnd(val, dict[key]);
  });
  res = current + res;
}

function findRange(num: number, i: number) {
  const range: number[] = [];
  for (const key in dict) {
    if (num >= +key && i <= +key) {
      range.push(+key);
    }
  }
  findAddends(range, num);
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

console.log(intToRoman(378));
console.log(res);
