function rob(nums: number[]): number {
  let prevMax = 0,
    max = 0;

  for (let i = 0; i < nums.length; i++) {
    const temp = max;
    const currentMax = prevMax + nums[i];
    if (currentMax > max) max = currentMax;
    prevMax = temp;
  }
  return Math.max(prevMax, max);
}
console.log(rob([4, 1, 2, 7, 5, 3, 1]));
