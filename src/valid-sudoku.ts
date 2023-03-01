export function validSudoku(board: string[][]): boolean {
  const totalCells = board.length ** 2;
  const rows = new Map<number, Set<number>>();
  const cols = new Map<number, Set<number>>();
  const boxes = new Map<number, Set<number>>();

  for (let i = 0; i < totalCells; i++) {
    const row = ~~(i / 9);
    const col = i % 9;
    const box = ~~(row / 3) * 3 + ~~(col / 3);
    const cell = +board[row][col];

    if (isNaN(cell)) continue;

    if (!rows.has(row)) rows.set(row, new Set<number>());
    if (!cols.has(col)) cols.set(col, new Set<number>());
    if (!boxes.has(box)) boxes.set(box, new Set<number>());

    if (rows.get(row).has(cell)) return false;
    if (cols.get(col).has(cell)) return false;
    if (boxes.get(box).has(cell)) return false;

    rows.get(row).add(cell);
    cols.get(col).add(cell);
    boxes.get(box).add(cell);
  }

  return true;
}
console.log(
  validSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ])
);
