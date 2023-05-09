export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let res: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const lastEl = res[res.length - 1];
    const currEl = intervals[i];
    if (currEl[0] <= lastEl[1])
      lastEl[1] = Math.max(lastEl[1], intervals[i][1]);
    else res.push(intervals[i]);
  }
  return res;
}

console.log(
  merge([
    [1, 4],
    [4, 5],
    [6, 7],
    [0, 10]
  ])
);
