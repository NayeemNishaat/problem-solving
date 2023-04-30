function exist(board: string[][], word: string): boolean {
  let k = 0;
  const map = new Map();

  function backtrack(coords: number[]) {
    const queue = [coords];
    let i = 0;

    while (queue.length) {
      let [x, y, k] = queue.shift();

      i = k;
      if (k > word.length) return i;

      const positions = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1]
      ];

      positions.forEach(([dx, dy]) => {
        const X = x + dx,
          Y = y + dy;

        if (
          board[X]?.[Y] !== undefined &&
          board[X]?.[Y] === word[k] &&
          !map.has(`${X},${Y}`)
        ) {
          console.log(map, X, Y);
          queue.push([X, Y, k + 1]);
          map.set(`${X},${Y}`, true);
        }
      });
    }

    return i;
  }

  for (let i = 0; i < board.length; i++)
    for (let j = 0; j < board[i].length; j++)
      if (board[i][j] === word[0] && !map.has(`${i},${j}`)) {
        map.set(`${i},${j}`, true);
        k = backtrack([i, j, 1]);
      }

  console.log(k);
  return k === word.length;
}
console.log(
  exist(
    [
      ["a", "a", "a", "a"],
      ["a", "a", "a", "a"],
      ["a", "a", "a", "a"]
    ],
    "aaaaaaa"
  )
);
