function hammingDistance(x: number, y: number): number {
  let count = 0;
  const xor = (x ^ y).toString(2);
  console.log(xor, (x ^ y).toString(2));
  for (let i = 0; i < xor.length; i++) xor[i] === "1" && ++count;
  return count;
}
console.log(hammingDistance(93, 73));
console.log(2 ** 31);
