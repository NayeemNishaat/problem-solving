function sortColors(nums: number[]): void {
  let red = 0,
    white = 0,
    blue = nums.length - 1;

  while (white <= blue) {
    if (nums[white] === 0) {
      [nums[red], nums[white]] = [nums[white], nums[red]];
      white++, red++;
    } else if (nums[white] === 1) white++;
    else {
      [nums[white], nums[blue]] = [nums[blue], nums[white]];
      blue--;
    }
  }
  console.log(nums);
}
sortColors([2, 0, 2, 1, 1, 0]);
