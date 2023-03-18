export function rob(nums: number[]): number {
  const hash = {};
  function recurse(nums: number[], len: number) {
    if (len < 0) return 0;
    if (hash[len] !== undefined) return hash[len];

    const max = Math.max(
      recurse(nums, len - 2) + nums[len],
      recurse(nums, len - 1)
    );
    hash[len] = max;
    return max;
  }

  return recurse(nums, nums.length - 1);
}
console.log(
  rob([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ])
);
