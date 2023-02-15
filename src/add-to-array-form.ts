// export function addToArrayForm(num: number[], k: number): number[] {
//   const numStr = num.join("");
//   let sum = BigInt(numStr) + BigInt(k);

//   const arr = [];
//   while (sum) {
//     arr.unshift(sum % 10n);
//     sum = sum / 10n;
//   }
//   return arr;
// }

export function addToArrayForm(num: number[], k: number): number[] {
  let len = num.length;
  const result = [];

  while (--len >= 0 || k > 0) {
    if (len >= 0) k += num[len]; // Note: Important condition because there could be k but the length of the array is finished. In that case we could end up NaN.

    result.push(Math.trunc(k % 10));
    k = Math.trunc(k / 10);
  }

  return result.reverse();
}

console.time();
console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);
console.timeEnd();
