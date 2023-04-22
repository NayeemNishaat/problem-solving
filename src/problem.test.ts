function numIslands(grid: string[][]): number {
  let numIslands = 0;
  const visited = new Map();

  function bfs(i: number, j: number) {
    const queue = [];
    queue.push([i, j]);
    visited.set(`${i}${j}`, true);

    while (queue.length) {
      const [r, c] = queue.shift();

      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];

      directions.forEach(([dr, dc]) => {
        const row = r + dr;
        const col = c + dc;

        if (grid[row]?.[col] === "1" && !visited.has(`${row}${col}`)) {
          queue.push([row, col]);
          visited.set(`${row}${col}`, true);
        }
      });
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1" && !visited.has(`${i}${j}`))
        numIslands++, bfs(i, j);
    }
  }
  return numIslands;
}
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
  ])
);

// console.dir(
//   Array.from({ length: 300 }, () => [Math.round(Math.random()).toString()]),
//   { maxArrayLength: null }
// );
