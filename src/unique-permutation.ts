export function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  const dfs = (combination: number[], available: number[]): void => {
    if (available.length === 0) result.push(combination);

    for (let i = 0; i < available.length; i++) {
      if (available[i] === available[i - 1]) continue;

      dfs(
        [...combination, available[i]],
        [...available.slice(0, i), ...available.slice(i + 1)]
      );
    }
  };
  dfs([], nums);
  return result;
}
console.log(permuteUnique([1, 1, 2, 2]));
