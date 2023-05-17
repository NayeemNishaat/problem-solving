export function canJump(nums: number[]): boolean {
  const memo = [];

  function rec(i: number): boolean {
    if (i >= nums.length - 1) return true;

    if (memo[i] !== undefined) return memo[i];
    for (let j = nums[i]; j > 0; j--) {
      const res = rec(i + j);
      memo[i] = res;
      if (res) return true;
    }
    return (memo[i] = false);
  }
  return rec(0);
}
console.log(canJump([2, 5, 0, 0]));
