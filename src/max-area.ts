// Note: Brute Force
/* export function maxArea(height: number[]): number {
  let initialWater = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const currentWater = Math.min(height[i], height[j]) * (j - i);
      initialWater = Math.max(initialWater, currentWater);
    }
  }

  return initialWater;
} */

// Note: Two Pointers
export function maxArea(height: number[]): number {
  let initialWater = 0,
    i = 0,
    j = height.length - 1;

  while (i < j) {
    const currentWater = Math.min(height[i], height[j]) * (j - i);
    initialWater = Math.max(initialWater, currentWater);
    if (height[i] <= height[j]) i++;
    else j--;
  }

  return initialWater;
}
console.log(maxArea([1, 2, 6, 2, 5, 4, 8, 3, 7]));
