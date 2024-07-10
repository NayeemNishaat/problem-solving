export function main() {
  function maxSubArray(nums: number[]): number {
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
      for (let j = i; j < nums.length; j++) {
        let s = 0;
        for (let k = i; k <= j; k++) {
          s += nums[k];
        }
        max = Math.max(max, s);
      }
    }
    return max;
  }
  return maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
}
