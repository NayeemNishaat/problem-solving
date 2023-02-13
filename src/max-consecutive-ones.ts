export function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0,
    current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) current++;
    else current = 0;
    max = Math.max(max, current);
  }
  return max;
}

console.time();
console.log(
  findMaxConsecutiveOnes([
    1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0
  ])
);
console.timeEnd();
