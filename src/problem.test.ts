function rob(nums: number[]): number {
  const hash = {};
  function recurse(nums: number[], len: number) {
    if (len <= 0) return 0;
    //
    return Math.max(recurse(nums, len - 2) + nums[len], recurse(nums, len - 1));
  }
  return recurse(nums, nums.length - 1);
}
console.log(rob([1, 3, 1, 3, 100]));
