export function main() {
  function findMin(nums: number[]): number {
    let left = 0,
      right = nums.length - 1,
      mid,
      min = Infinity;

    while (left <= right) {
      mid = Math.ceil((left + right) / 2);

      min = Math.min(min, nums[mid], nums[left]);

      if (nums[mid] >= nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return min;
  }

  return findMin([7, 8, 1, 2, -3, 4, 5, 6]);
}
