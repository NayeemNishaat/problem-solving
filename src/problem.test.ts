function generic(arr: number[]) {
  let max = -Infinity;
  let currentMax = 0;
  for (let i = 0; i < arr.length; i++) {
    currentMax += arr[i];
    if (currentMax < arr[i]) currentMax = arr[i];

    max = Math.max(max, currentMax);
  }
  return max;
}
console.log(generic([5, 4, -1, 7, 8]));
