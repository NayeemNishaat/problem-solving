// Chapter: Top Down
/* export function lengthOfLIS(nums: number[]): number {
  const map = new Map(),
    stack = [];

  function dp(idx: number) {
    if (map.has(idx)) return map.get(idx);

    let max = 0;
    for (let i = idx + 1; i < nums.length; i++) {
      if (stack[stack.length - 1] >= nums[i]) continue;

      stack.push(nums[i]);
      max = Math.max(max, dp(i) + 1);
      stack.pop();
    }
    map.set(idx, max);
    return max;
  }
  return dp(-1);
} */

// Chapter: Bottom Up
export function lengthOfLIS(nums: number[]): number {
  const dp = Array.from({ length: nums.length }, () => 1);

  for (let i = nums.length - 2; i >= 0; i--) {
    let max = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] <= nums[i]) continue;
      max = Math.max(max, 1 + dp[j]);
    }
    dp[i] = max;
  }
  return dp[0];
}
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
// [10, 9, 2, 5, 3, 7, 101, 18]
// [3,5,6,2,5,4,19,5,6,7,12]
// [0,1,0,3,2,3]
