function mincostTickets(days: number[], costs: number[]): number {
  function helper(covered, cost) {
    if (covered > days[days.length - 1]) return cost;
    covered = days.find((el) => el > covered);
    if (covered === undefined) return cost;
    // console.log(covered, cost);
    return Math.min(
      helper(covered, costs[0] + cost),
      helper(covered + 6, costs[1] + cost),
      helper(covered + 29, costs[2] + cost)
    );
  }
  return helper(0, 0);
}
console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
