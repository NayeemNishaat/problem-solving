export function majorityElement(nums: number[]): number {
  const map = new Map();

  nums.forEach((n) => {
    if (map.has(n)) map.set(n, map.get(n) + 1);
    else map.set(n, 1);
  });

  const max = [-Infinity, -Infinity];
  for (const [k, v] of map.entries()) {
    if (v > max[1]) {
      max[0] = k;
      max[1] = v;
    }
  }

  return max[0];
}
majorityElement([1]);
