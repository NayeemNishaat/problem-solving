function maxProduct(nums: number[]): number {
  let max = -Infinity,
    absMax = -Infinity,
    currProd = nums[0],
    absCurrProd = nums[0],
    negative = false;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) negative = !negative;

    currProd *= nums[i];
    absCurrProd *= nums[i];

    if (currProd < nums[i]) currProd = nums[i];

    if (absCurrProd < Math.abs(nums[i])) {
      absCurrProd = Math.abs(nums[i]);
    }

    max = Math.max(max, currProd);
    absMax = Math.max(absMax, absCurrProd);
  }

  if (negative) return max;
  else return absMax;
}
