function searchMatrix(matrix: number[][], target: number): boolean {
  let top = 0,
    right = matrix.length;
  while (top < matrix.length && right >= 0) {
    if (matrix[top][right] === target) return true;
    if (matrix[top][right] < target) top++;
    else right--;
  }
  return false;
}
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ],
    19
  )
);
