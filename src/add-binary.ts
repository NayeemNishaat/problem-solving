// Part: Simple Solution That Works For Small Numbers Only
// export function addBinary(a: string, b: string): string {
//   return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
// }

// Part: Optimized Solution
export function addBinary(a: string, b: string): string {
  const maxLen = Math.max(a.length, b.length);
  const res = [];
  let carry = false;

  for (let i = 0; i < maxLen || carry; i++) {
    let currentSum = carry ? 1 : 0;
    carry = false;

    if (a[a.length - i - 1] === "1") currentSum++;
    if (b[b.length - i - 1] === "1") currentSum++;

    if (currentSum > 1) (carry = true), (currentSum -= 2);
    res.push(currentSum);
  }
  return res.reverse().join("");
}

console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
);
