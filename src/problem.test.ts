function generic(nums: number[]) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) nums[i] !== 0 && (nums[j++] = nums[i]);
  for (j; j < nums.length; j++) nums[j] = 0;

  return nums;
}
console.log(
  generic([
    1, 0, 0, 3, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 89, 9, 5, 5, 0, 0, 34, 34,
    99
  ])
);
// [1, 0, 0, 3, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 89, 9, 5, 5, 0, 0, 34, 34, 99 ]
