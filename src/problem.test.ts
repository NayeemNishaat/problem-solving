function searchMatrix(matrix: number[][], target: number): boolean {
  let top = 0,
    right = matrix[0].length - 1;
  while (top < matrix.length && right >= 0) {
    if (matrix[top][right] === target) return true;
    if (matrix[top][right] > target) right--;
    else top++;
  }
  return false;
}
console.log(searchMatrix([[1, 3, 5]], 5));
