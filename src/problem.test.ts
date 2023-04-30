function exist(board: string[][], word: string): boolean {
  let k = 1;

  function backtrack(coords: number[]) {
    const queue = [coords];
    let i = 0;

    while (queue.length) {
      let [x, y, k, px, py] = queue.shift();
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
        if (px === X && py === Y) return;

        if (board[X]?.[Y] !== undefined && board[X]?.[Y] === word[k]) {
          queue.push([X, Y, k + 1, x, y]);
        }
      });
    }

    return i;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        k = Math.max(backtrack([i, j, 1]), k);
      }
    }
  }

  return k === word.length;
}
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "S", "E"]
    ],
    "SES"
  )
);
