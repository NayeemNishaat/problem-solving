export const fractionToDecimal = function (
  numerator: number,
  denominator: number
) {
  if (numerator === 0) {
    return "0";
  }

  let result = "";

  if (Math.sign(numerator) !== Math.sign(denominator)) result += "-";

  const numer = Math.abs(numerator);
  const denom = Math.abs(denominator);

  result += Math.floor(numer / denom);

  let remainder = numer % denom;
  if (remainder === 0) return result;

  result += ".";

  const map = new Map();

  while (remainder !== 0) {
    if (map.has(remainder)) {
      const index = map.get(remainder);
      result = result.slice(0, index) + "(" + result.slice(index) + ")";
      break;
    }

    map.set(remainder, result.length);

    remainder *= 10;
    result += Math.floor(remainder / denom);
    remainder %= denom;
  }

  return result;
};
console.log(fractionToDecimal(29, 7));
