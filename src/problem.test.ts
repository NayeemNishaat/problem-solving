function uniquePaths(num1: number, num2: number): number {
  const grid = Array.from({ length: num1 }, () => Array(num2).fill(1));
  const map = new Map();

  function rec(x: number, y: number) {
    if (x === num1 - 1 && y === num2 - 1) return 1;
    if (grid[x]?.[y] === undefined) return 0;

    if (map.has(`${x},${y}`)) return map.get(`${x},${y}`);
    const acc = rec(x + 1, y) + rec(x, y + 1);
    map.set(`${x},${y}`, acc);
    return acc;
  }

  return rec(0, 0);
}
console.log(uniquePaths(50, 8));
