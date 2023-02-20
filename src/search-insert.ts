export function searchInsert(nums: number[], target: number): number {
  let start = 0,
    end = nums.length - 1,
    mid = 0;

  while (start <= end) {
    mid = Math.floor((end + start) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return start;
}
console.log(searchInsert([1, 3, 5, 6], 2));
