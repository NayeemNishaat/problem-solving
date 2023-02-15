// export function myAtoi(s: string): number {
//   const parsed = parseInt(s);
//   if (parsed < -2147483648) return -2147483648;
//   if (parsed > 2147483647) return 2147483647;
//   return Number.isNaN(+parsed) ? 0 : parsed;
// }

export function myAtoi(s: string): number {
  s = s.trim();
  const number = s.match(/^[-+]?\d+/);
  if (number) {
    const integer = parseInt(number[0]);
    if (integer > 2147483647) return 2147483647;
    else if (integer < -2147483648) return -2147483648;
    return integer;
  }
  return 0;
}
console.log(myAtoi("  78 "));
