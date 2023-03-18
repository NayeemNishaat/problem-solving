function rob(nums: number[]): number {
  let prev = 0,
    max = 0;

  for (let i = 0, n = nums.length; i < n; i++) {
    const temp = max;
    const currentMax = prev + nums[i];
    if (currentMax > max) max = currentMax;
    prev = temp;
  }
  return Math.max(prev, max);
}
console.log(rob([1, 2, 3, 1]));
