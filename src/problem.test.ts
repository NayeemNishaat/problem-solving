function hammingDistance(x: number, y: number): number {
  let count = 0,
    xor = x ^ y;

  // for (let i = 0; i < xor.length; i++) xor[i] === "1" && ++count;
  while (xor) (count += xor & 1), (xor >>= 1);
  return count;
}
console.log(hammingDistance(93, 73));
