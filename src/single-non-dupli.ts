export function singleNonDuplicate(nums: number[]): number {
  let left = 0,
    right = nums.length - 1,
    mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (mid % 2) mid -= 1;

    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1])
      return nums[mid];
    if (nums[mid] === nums[mid + 1]) left = mid + 2;
    else right = mid - 2;
  }
}
console.log(singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 4, 8, 8, 9]));
