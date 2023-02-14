export function convert(s: string, numRows: number) {
  if (numRows == 1) return s;

  const matrix = Array.from({ length: numRows }, () => []);

  let row = 0,
    col = 0;

  for (let i = 0; i < s.length; ) {
    while (row < numRows && i < s.length) {
      matrix[row][col] = s[i];
      ++row, ++i;
    }

    ++col;
    row -= 2;

    while (row > 0 && i < s.length) {
      matrix[row][col] = s[i];
      --row, ++col, ++i;
    }
  }
  return matrix.map((m) => m.join("")).join("");
}
console.log(convert("PAYPALISHIRING", 3));
