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

/* 
const THOUSANDS = [ 'M', 'MM', 'MMM' ];
const HUNDREDS = [ 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM' ];
const TENS = [ 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC' ];
const UNITS = [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX' ];

function intToRoman(num: number): string {
    let roman = '';

    const thousands = (num - num % 1000) / 1000;
    const hundreds = (num % 1000 - num % 100) / 100;
    const tens = (num % 100 - num % 10) / 10;
    const units = num % 10;

    roman += THOUSANDS[ thousands - 1] || '';
    roman += HUNDREDS[ hundreds - 1] || '';
    roman += TENS[ tens - 1] || '';
    roman += UNITS[ units - 1] || '';
    
    return roman;
};
*/

export function romanToInt(s: string): number {
  const hash = new Map(
    Object.entries({
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    })
  );
  let num = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (hash.get(s[i]) < hash.get(s[i + 1])) num -= hash.get(s[i]);
    else num += hash.get(s[i]);
  }
  return num;
}
// console.log(romanToInt("III"));
