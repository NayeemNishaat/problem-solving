export function sortedSquares(nums: number[]): number[] {
  let left = 0,
    right = nums.length - 1,
    p = right;
  const res = [];

  while (left <= right) {
    res[p] =
      nums[left] ** 2 > nums[right] ** 2
        ? nums[left++] ** 2
        : nums[right--] ** 2;
    p--;
  }

  return res;
}
console.log(sortedSquares([-5, -3, -2, -1]));
