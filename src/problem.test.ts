function exist(board: string[][], word: string): boolean {
  function backtrack(coords: number[]) {
    console.log(coords);
    const queue = [coords];

    while (queue.length) {
      let [x, y] = queue.shift();

      const positions = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1]
      ];

      positions.forEach(([dx, dy]) => {
        const X = x + dx,
          Y = y + dy;

        console.log(board[X][Y], [X, Y]);
      });
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        backtrack([i, j]);
      }
    }
  }

  return;
}
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ],
    "SEE"
  )
);
