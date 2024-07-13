export function main() {
  function maxProduct(nums: number[]): number {
    let max = -Infinity,
      localMin = 1,
      localMax = 1;

    for (let i = 0; i < nums.length; i++) {
      localMin *= nums[i];
      localMax *= nums[i];

      const tmp = localMax;
      localMax = Math.max(localMin, localMax);
      localMin = Math.min(localMin, tmp);
      if (localMin > nums[i]) localMin = nums[i];
      if (localMax < nums[i]) localMax = nums[i];

      max = Math.max(max, localMax);
    }
    return max;
  }

  return maxProduct([0, 1, 2, 0, 0, 4, -2, -3]);
}
