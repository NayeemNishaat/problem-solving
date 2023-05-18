function solution(num1: number, num2: number) {
  const grid = Array.from({ length: num1 }, () => Array(num2).fill(1));

  function rec(x: number, y: number) {
    if (x === num1 - 1 && y === num2 - 1) return 1;
    if (grid[x]?.[y] === undefined) return 0;

    return rec(x + 1, y) + rec(x, y + 1);
  }

  return rec(0, 0);
}
console.log(solution(15, 15));
