export function numIslands(grid: string[][]): number {
  let numIslands = 0;
  const map = new Map(),
    directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ];

  function bfs(i: number, j: number) {
    const queue = [[i, j]];

    while (queue.length) {
      const [r, c] = queue.shift();

      directions.forEach(([dr, dc]) => {
        const row = r + dr;
        const col = c + dc;

        if (grid[row]?.[col] === "1" && !map.has(`${row},${col}`)) {
          queue.push([row, col]);
          map.set(`${row},${col}`, true);
        }
      });
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && !map.has(`${i},${j}`)) {
        bfs(i, j);
        numIslands++;
      }
    }
  }

  return numIslands;
}

console.log(numIslands([["1", "0", "1", "1", "1"]]));

// console.dir(
//   Array.from({ length: 300 }, () => [Math.round(Math.random()).toString()]),
//   { maxArrayLength: null }
// );
