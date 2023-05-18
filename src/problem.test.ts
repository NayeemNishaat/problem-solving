function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(1));

  for (let i = m - 2; i >= 0; i--)
    for (let j = n - 2; j >= 0; j--) dp[i][j] = dp[i + 1][j] + dp[i][j + 1];

  return dp[0][0];
}
console.log(uniquePaths(3, 7));
