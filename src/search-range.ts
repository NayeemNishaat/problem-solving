export function searchRange(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1,
    mid = 0,
    start = -1,
    end = -1,
    found = -1;

  while (left <= right) {
    mid = ((left + right) / 2) | 0;

    if (nums[mid] === target) {
      found = mid;
      break;
    } else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  start = end = found;
  if (found === -1) return [start, end];
  while (nums[start] === target) start--;
  while (nums[end] === target) end++;

  return [++start, --end];
}
console.log(searchRange([], 0));
