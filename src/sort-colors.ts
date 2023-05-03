export function sortColors(nums: number[]): void {
  // Note: Better Approach
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

  // Note: OK Approach
  /*  const map = new Map();
  
    nums.forEach((el) =>
      map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1)
    );
  
    let i = 0,
      zeroes = map.get(0),
      ones = map.get(1),
      twos = map.get(2);
    while (zeroes) (nums[i] = 0), i++, zeroes--;
    while (ones) (nums[i] = 1), i++, ones--;
    while (twos) (nums[i] = 2), i++, twos--; */

  console.log(nums);
}
sortColors([2, 0, 1]);
