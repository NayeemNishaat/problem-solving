function maxSubArray(nums: number[]): number {
  let max = Number.MIN_SAFE_INTEGER,
    currentMax = 0;

  for (let i = 0; i < nums.length; i++) {
    currentMax += nums[i];

    if (currentMax < nums[i]) currentMax = nums[i];
    max = Math.max(currentMax, max);
  }

  return max;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
