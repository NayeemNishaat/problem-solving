function searchMatrix(matrix: number[][], target: number): boolean {
  let xLeft = 0,
    yTop = 0,
    xRight = matrix.length - 1,
    yDown = matrix.length - 1,
    xMid = 0,
    yMid = 0;

  while (xLeft <= xRight && yTop <= yDown) {
    xMid = ~~((xLeft + xRight) / 2);
    yMid = ~~((yTop + yDown) / 2);
    console.log(
      matrix[xMid][yMid],
      { xMid, yMid, xLeft, xRight, yTop, yDown },
      matrix[0][xMid],
      matrix[yMid][0]
    );
    if (matrix[xMid][yMid] === target) return true;

    if (matrix[xMid][yMid] > target) {
      xRight = xMid - 1;
      yDown = yMid - 1;
    } else {
      xLeft = xMid + 1;
      yTop = yMid + 1;
    }

    // if (matrix[0][xMid] > target) {
    //   xRight = xMid - 1;
    // } else {
    //   xLeft = xMid + 1;
    // }
    // if (matrix[yMid][0] > target) yDown = yMid - 1;
    // else yTop = yMid + 1;
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
    7
  )
);
