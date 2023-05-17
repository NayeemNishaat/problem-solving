function canJump(nums: number[]): boolean {
  let reach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (reach < i) return false;
    reach = Math.max(reach, i + nums[i]);
  }
  return true;
}
console.log(canJump([2, 5, 0, 0]));
