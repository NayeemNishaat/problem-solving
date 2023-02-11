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

  let currentResult = "";
  addends.forEach(
    (val: number, key: number) => (currentResult += "".padEnd(val, dict[key]))
  );
  return currentResult;
}

function findRange(num: number, i: number) {
  const range: number[] = [];
  for (const key in dict) if (num >= +key && i <= +key) range.push(+key);
  if (i > 1000) range.push(1000);
  return findAddends(range, num);
}

export function intToRoman(num: number): string {
  let i = 1;
  let result = "";

  while (num) {
    const mod = num % 10;
    const current = mod * i;

    if (!dict[current]) result = findRange(current, i) + result;
    else result = dict[current] + result;

    num = Math.trunc(num / 10);
    i *= 10;
  }
  return result;
}

console.log(intToRoman(3397));
