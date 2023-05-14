export function searchMatrix(matrix: number[][], target: number): boolean {
  function bs(nums: number[]): boolean {
    let left = 0,
      right = nums.length - 1,
      mid = 0;

    while (left <= right) {
      mid = ~~((left + right) / 2);
      if (nums[mid] === target) return true;
      if (nums[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return false;
  }

  let top = 0,
    right = matrix[0].length - 1;

  while (top < matrix.length) {
    if (matrix[top][right] >= target) if (bs(matrix[top])) return true;
    top++;
  }
  return false;
}
console.log(searchMatrix([[-5]], -5));

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ],
    -5
  )
);
