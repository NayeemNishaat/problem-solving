function sortColors(nums: number[]): void {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.get(nums[i])
      ? map.set(nums[i], map.get(nums[i]) + 1)
      : map.set(nums[i], 1);
  }

  let zeros = map.get(0),
    ones = map.get(1),
    twos = map.get(2),
    i = 0;

  while (zeros) {
    nums[i] = 0;
    i++, zeros--;
  }
  while (ones) {
    nums[i] = 1;
    i++, ones--;
  }
  while (twos) {
    nums[i] = 2;
    i++, twos--;
  }
  console.log(nums);
}
console.log(sortColors([2, 2, 2, 2, 2, 2]));

console.log(Array(300).fill(2).toString());
