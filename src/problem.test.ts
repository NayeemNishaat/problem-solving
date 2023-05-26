function lengthOfLIS(nums: number[]): number {
  let max = 1;

  function dp(nums: number[]) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] >= nums[i + 1]) break;
      else if (nums[i] < nums[i + 1] && i === nums.length - 2) {
        max = Math.max(max, nums.length);
        return;
      }
    }

    for (let i = 0; i < nums.length; i++) {
      dp([...nums.slice(0, i), ...nums.slice(i + 1)]);
    }
  }
  dp(nums);
  return max;
}
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
