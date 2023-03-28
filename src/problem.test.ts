function mincostTickets(days: number[], costs: number[]): number {
  const hash = {};

  function helper(covered: number, cost: number) {
    if (covered > days[days.length - 1]) return cost;
    covered = days.find((el) => el > covered);
    if (covered === undefined) return cost;
    // if (hash[covered]) return hash[covered];
    console.log(covered, cost);
    hash[covered] = cost;

    return Math.min(
      helper(covered, costs[0] + cost),
      helper(covered + 6, costs[1] + cost),
      helper(covered + 29, costs[2] + cost)
    );
  }
  return helper(0, 0);
}
console.log(
  mincostTickets(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    ],
    [2, 7, 15]
  )
);

// const arr = [];
// for (let i = 0; i < 365; i++) {
//   arr.push(i + 1);
// }
// console.log(arr.toString());
