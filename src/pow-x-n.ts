function myPow(x: number, n: number): number {
  return n >= 0 ? helper(x, n) : 1 / helper(x, -n);
}

function helper(a: number, k: number): number {
  let res = 1;
  while (k) {
    if (k & 1) res *= a;

    a *= a;
    k >>>= 1;
  }
  return res;
}
