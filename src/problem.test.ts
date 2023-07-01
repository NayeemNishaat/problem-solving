function mySqrt(x: number): number {
  let right = x,
    left = 0,
    result = 0;

  while (right >= left) {
    const m = left + Math.floor((right - left) / 2);
    const square = m * m;

    if (square === x) return m;
    else if (square < x && square > result) result = m;

    if (square > x) right = m - 1;
    else left = m + 1;
  }

  return result;
}
