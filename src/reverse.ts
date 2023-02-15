export function reverse(x: number): number {
  let reverse = 0,
    xb = x,
    last = 0;

  while (xb) {
    last = xb % 10;
    reverse = reverse * 10 + last;
    xb = Math.trunc(xb / 10);
  }

  if (reverse > 2 ** 31 - 1 || reverse < -(2 ** 31)) return 0;
  else return reverse;
}
console.log(reverse(120));
