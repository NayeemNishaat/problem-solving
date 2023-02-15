export function addToArrayForm(num: number[], k: number): number[] {
  const numStr = num.join("");
  let sum = BigInt(numStr) + BigInt(k);

  const arr = [];
  while (sum) {
    arr.unshift(sum % 10n);
    sum = sum / 10n;
  }
  return arr;
}

console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);
// [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
