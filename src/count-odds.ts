// export function countOdds(low: number, high: number): number {
//   let total = 0;
//   while (low <= high) {
//     if (low % 2 !== 0) total++;
//     low++;
//   }
//   return total;
// }

// Part: Optimized
export function countOdds(low: number, high: number): number {
  const range = high - low;
  const firstOdd = low % 2 !== 0;
  let total = 0;

  const lastOdd = high % 2 !== 0;
  if (firstOdd || lastOdd) total = Math.floor(range / 2) + 1;
  else total = Math.floor(range / 2);

  return total;
}
console.log(countOdds(0, 99999999999999));
