export function rotate(matrix: number[][]): any {
  let i = 0,
    currLength = matrix.length,
    length = matrix.length;

  // Part: Swapping Rows
  while (i < ~~(length / 2)) {
    ([matrix[i], matrix[currLength - 1]] = [matrix[currLength - 1], matrix[i]]),
      i++,
      currLength--;
  }

  // Part: Transposing
  for (let i = 0; i < length; i++)
    for (let j = 0; j < length; j++) {
      if (i !== j && j > i)
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  return matrix;
}
console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
  ])
);
