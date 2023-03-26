function reverseBits(n: number): number {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    ans = (ans << 1) | (n & 1);
    n >>= 1;
  }
  return ans;
}
console.log(reverseBits(0b00000010100101000001111010011100));
