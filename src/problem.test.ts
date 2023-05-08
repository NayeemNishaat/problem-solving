function searchRange(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1,
    mid = 0,
    start = -1,
    end = -1,
    found = -1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      found = mid;
      break;
    } else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  start = end = found;
  while (nums[start] === target) start--;
  while (nums[end] === target) end++;

  return [++start, --end];
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
