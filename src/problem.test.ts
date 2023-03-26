function reverseBits(n: number): number {
  let ans = 0b0;
  for (let i = 0; i < 32; i++) {
    ans = (ans << 1) | (n & 1);
    n >>= 1;
  }
  return ans >>> 0; // Note: Unsigned right shift
}
console.log(reverseBits(0b11111111111111111111111111111101));
