function canJump(nums: number[], i: number): boolean {
  if (i >= nums.length - 1) return true;

  for (let j = nums[i]; j > 0; j--) return canJump(nums, i + j);
  return false;
}
console.log(canJump([3, 2, 1, 0, 4], 0));
