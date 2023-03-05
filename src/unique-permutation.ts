export function permuteUnique(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  function dfs(combination: number[], available: number[]): void {
    if (available.length === 0) result.push(combination);

    for (let i = 0; i < available.length; i++) {
      if (available[i] === available[i - 1]) continue;
      const temp = [...available];
      temp.splice(i, 1);
      dfs(
        [...combination, available[i]],
        // [...available.slice(0, i), ...available.slice(i + 1)],
        temp
      );
    }
  }
  dfs([], nums);
  return result;
}
console.log(permuteUnique([1, 1, 2, 2]));
