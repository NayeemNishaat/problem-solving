// export function reverse(x: number): number {
//   let reverse = 0,
//     xb = x,
//     last = 0;

//   while (xb) {
//     last = xb % 10;
//     reverse = reverse * 10 + last;
//     xb = Math.trunc(xb / 10);
//   }

//   if (reverse > 2 ** 31 - 1 || reverse < -(2 ** 31)) return 0;
//   return reverse;
// }

// Part: Tricky Solution
export const reverse = (x: number) => {
  const xStr = x.toString();
  let reverse = "";
  if (xStr[0] === "-") reverse = "-";

  for (let i = xStr.length - 1; i >= 0; --i) reverse += xStr[i];

  const reverseInt = parseInt(reverse);
  if (reverseInt < -2147483648 || reverseInt > 2147483647) return 0;
  return reverseInt;
};
console.log(reverse(120));
