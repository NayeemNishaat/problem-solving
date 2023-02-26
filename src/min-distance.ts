// Part: Recursion (With Memoization)
export function minDistance(word1: string, word2: string): number {
  function recursion(word1: string, word2: string, w1: number, w2: number) {
    let minDis = 0;
    if (w1 === 0) return w2;
    if (w2 === 0) return w1;

    if (memo[w1][w2] !== undefined) return memo[w1][w2];

    if (word1.charAt(w1 - 1) === word2.charAt(w2 - 1))
      return recursion(word1, word2, w1 - 1, w2 - 1);
    else {
      const replaceOp = recursion(word1, word2, w1 - 1, w2 - 1);
      const deleteOp = recursion(word1, word2, w1 - 1, w2);
      const addOp = recursion(word1, word2, w1, w2 - 1);
      minDis = Math.min(replaceOp, Math.min(deleteOp, addOp)) + 1;
    }
    memo[w1][w2] = minDis;
    return minDis;
  }

  const memo: number[][] = Array.from({ length: word1.length + 1 }, () =>
    Array.from({ length: word2.length + 1 })
  );
  return recursion(word1, word2, word1.length, word2.length);
}
console.log(minDistance("dinitrophenylhydrazine", "benzalphenylhydrazone"));
