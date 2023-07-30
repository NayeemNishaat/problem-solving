function findNumbers(nums: number[]): number {
  nums = nums
    .map((n) => {
      return Math.max(Math.floor(Math.log10(Math.abs(n))), 0) + 1;
    })
    .filter((n) => n % 2 === 0);

  return nums.length;
}
findNumbers([555, 901, 482, 1771]);
