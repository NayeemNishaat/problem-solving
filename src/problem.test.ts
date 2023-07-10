function divide(dividend: number, divisor: number): number {
  let count = 0,
    sign = 1;

  const negativeDividend = dividend < 0;
  const negativeDivisor = divisor < 0;

  if (
    (negativeDividend || negativeDivisor) &&
    !(negativeDividend && negativeDivisor)
  )
    sign = -1;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  while (divisor <= dividend) {
    let powerOfTwo = 1;
    let currValue = divisor;

    while (currValue + currValue <= dividend) {
      currValue += currValue;
      powerOfTwo += powerOfTwo;
    }

    count += powerOfTwo;

    dividend -= currValue;
  }

  let total = count * sign;

  total = total > 2 ** 31 - 1 ? 2 ** 31 - 1 : total;
  total = total < -(2 ** 31) ? -(2 ** 31) : total;

  return total;
}
console.log(divide(-2147483648, -1));
