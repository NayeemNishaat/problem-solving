function generic(nums: number[]) {
  let unique = 0;
  for (let i = 0; i < nums.length; i++) unique ^= nums[i];
  return unique;
}
console.log(generic([1, 2, 2]));
