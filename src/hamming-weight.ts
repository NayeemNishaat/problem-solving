export function hammingWeight(n: number): number {
  let count = 0;

  for (let i = 0; i < 32; i++) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}
console.log(hammingWeight(0b00000000000000000000000000001011));
