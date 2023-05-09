export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let res: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const lastEl = res[res.length - 1];
    const currEl = intervals[i];
    if (currEl[0] <= lastEl[1]) lastEl[1] = Math.max(lastEl[1], currEl[1]);
    else res.push(currEl);
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

/* export function merge(intervals: number[][]): number[][] {
  if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  let start = null,
    end = null,
    res = [];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] >= intervals[i][0] || end >= intervals[i][0]) {
      if (start === null) start = Infinity;
      if (end === null) end = -Infinity;
      start = Math.min(intervals[i - 1][0], intervals[i][0], start);
      end = Math.max(intervals[i - 1][1], intervals[i][1], end);
    } else {
      if (i - 1 === 0) res.push(intervals[i - 1]);
      if (start != null && end !== null) {
        res.push([start, end]);
        (start = null), (end = null);
      }
      if (intervals[i][1] < intervals[i + 1]?.[0] || i === intervals.length - 1)
        res.push(intervals[i]);
    }
  }
  if (start != null && end !== null) res.push([start, end]);

  return res;
} */
