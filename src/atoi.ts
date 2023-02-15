export function myAtoi(s: string): number {
  const parsed = parseInt(s);
  if (parsed < -2147483648) return -2147483648;
  if (parsed > 2147483647) return 2147483647;
  return Number.isNaN(+parsed) ? 0 : parsed;
}
console.log(myAtoi("01"));
// "words and 987"
