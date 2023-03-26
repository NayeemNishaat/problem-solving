function generate(numRows: number): number[][] {
  const res: number[][] = [];
  for (let i = 1; i <= numRows; i++) {
    i === 1 && res.push([1]);
    if (i > 1) {
      const tempRes = [1];
      for (let j = 0; j < i - 2; j++)
        tempRes.push(res[i - 2][j] + res[i - 2][j + 1]);

      tempRes.push(1);
      res.push(tempRes);
    }
  }
  return res;
}
console.log(generate(5));
