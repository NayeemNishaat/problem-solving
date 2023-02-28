function generic(nums: number[]) {
  let left = 0,
    right = 1;

  while (right < nums.length && left < nums.length) {
    if (nums[right] !== 0 && nums[left] === 0)
      ([nums[left], nums[right]] = [nums[right], nums[left]]), left++;

    if (nums[left] !== 0) left++;
    right++;
  }
  return nums;
}
console.log(
  generic([
    1, 0, 0, 3, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 89, 9, 5, 5, 0, 0, 34, 34,
    99
  ])
);
// [1, 0, 0, 3, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 89, 9, 5, 5, 0, 0, 34, 34, 99 ]
