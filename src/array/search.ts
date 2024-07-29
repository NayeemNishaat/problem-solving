function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1,
    mid: number;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      } else right = mid - 1;
    } else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
      } else left = mid + 1;
    }
  }

  return -1;
}
