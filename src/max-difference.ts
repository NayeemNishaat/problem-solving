export function minMaxDifference(num: number): number {
  const numStr = num.toString();
  const uniqueNums = new Set(numStr.split(""));
  let max = -Infinity;
  let min = +Infinity;
  uniqueNums.forEach((num) => {
    max = Math.max((numStr as any).replaceAll(num, "9"), max);
  });

  uniqueNums.forEach((num) => {
    min = Math.min((numStr as any).replaceAll(num, "0"), min);
  });

  return max - min;
}
console.log(minMaxDifference(10 ** 8));
