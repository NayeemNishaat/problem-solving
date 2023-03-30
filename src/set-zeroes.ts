export function setZeroes(matrix: number[][]): void {
  const rows = [],
    cols = [];

  for (let i = 0; i < matrix.length; i++) {
    const mat = matrix[i];
    for (let j = 0; j < mat.length; j++)
      if (mat[j] === 0) rows.push(i), cols.push(j);
  }

  rows.forEach((row) => matrix[row].fill(0));
  cols.forEach((col) => matrix.forEach((m) => (m[col] = 0)));

  console.log(matrix);
}
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
  ])
);

console.dir(
  Array.from({ length: 200 }, () =>
    Array.from({ length: 200 }, () => Math.trunc(Math.random() * 100))
  ),
  {
    colors: true,
    maxArrayLength: null
  }
);
