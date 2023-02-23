// Part: Brute Force Approach
export function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  function findMax(w: number) {
    const arr = [];
    capital.forEach((c, i) => {
      c <= w && arr.push(profits[i]);
    });
    return Math.max(...arr);
  }
  for (let i = 0; i < k; i++) {
    w += findMax(w);
  }
  return w;
}
console.log(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]));
