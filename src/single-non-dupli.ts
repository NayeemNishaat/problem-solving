export function singleNonDuplicate(nums: number[]): number {
  let left = 0,
    right = nums.length - 1,
    mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
      return nums[mid];
    if (
      (mid % 2 !== 0 && nums[mid] === nums[mid + 1]) ||
      (mid % 2 === 0 && nums[mid] === nums[mid - 1])
    ) {
      right = mid - 1;
    } else if (
      (mid % 2 === 0 && nums[mid] === nums[mid + 1]) ||
      (mid % 2 !== 0 && nums[mid] === nums[mid - 1])
    )
      left = mid + 1;
  }
}
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
