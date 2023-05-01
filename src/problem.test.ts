function exist(board: string[][], word: string): boolean {
  function dfs(r: number, c: number, i: number) {
    if (i === word.length) return true;
    if (board[r]?.[c] === undefined || board[r]?.[c] !== word[i]) return false;

    const temp = board[r][c];
    board[r][c] = "";
    const found =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    board[r][c] = temp;
    return found;
  }

  for (let i = 0; i < board.length; i++)
    for (let j = 0; j < board[i].length; j++)
      if (board[i][j] === word[0] && dfs(i, j, 0)) return true;

  return false;
}
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "E", "S"],
      ["A", "D", "E", "E"]
    ],
    "ABCESEEEFS"
  )
);
