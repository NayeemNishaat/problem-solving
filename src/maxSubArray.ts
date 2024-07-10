function maxSubArray(nums: number[]): number {
  let max = -Infinity,
    currMax = 0;

  for (let i = 0; i < nums.length; i++) {
    currMax += nums[i];

    if (currMax < nums[i]) currMax = nums[i];
    max = Math.max(max, currMax);

    // let s = 0;
    // for (let j = i; j < nums.length; j++) {
    //   // for (let k = i; k <= j; k++) {
    //   s += nums[j];
    //   // }
    //   max = Math.max(max, s);
    // }
  }
  return max;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
