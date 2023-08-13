export function sortedSquares(nums: number[]): number[] {
  let left = 0,
    right = nums.length - 1,
    p = right;

  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      nums[p] = nums[right--] ** 2;
    } else nums[p] = nums[right--] ** 2;
    p--;
  }

  return nums;
}
console.log(sortedSquares([-4, -1, 0, 3, 10]));
