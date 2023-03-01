function generic(nums: number[], target: number) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (map.has(comp)) return [map.get(comp), i];
    map.set(nums[i], i);
  }
}
console.log(generic([2, 7, 11, 15], 13));
