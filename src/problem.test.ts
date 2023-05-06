function findPeakElement(nums: number[]): number {
  let left = 0,
    right = nums.length - 1,
    mid = 0;

  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (
      nums[mid] > (nums[mid - 1] || -Infinity) &&
      nums[mid] > (nums[mid + 1] || -Infinity)
    )
      return mid;
    else if ((nums[mid - 1] || -Infinity) > nums[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return left;
}
console.log(findPeakElement([8, 9, 7, 11]));
