function canJump(nums: number[], i: number): boolean {
  if (i >= nums.length - 1) return true;
  let res = false;
  for (let j = nums[i]; j > 0; j--) {
    console.log(j);
    res = res || canJump(nums, i + j);
    if (res) return true;
  }
  return false;
}
console.log(canJump([2, 5, 0, 0], 0));
