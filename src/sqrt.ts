export function mySqrt(x: number): number {
  let right = x,
    left = 0;

  while (right >= left) {
    const mid = ~~((left + right) / 2);
    const square = mid * mid;

    if (square === x) return mid;

    if (square > x) right = mid - 1;
    else left = mid + 1;
  }

  return right;
}
mySqrt(10);
