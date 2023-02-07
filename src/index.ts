function combinationSum(candidates: number[], target: number) {
  const dfs = (i: number, currentCandidates: number[], total: number) => {
    if (target === total) {
      result.push([...currentCandidates]);
      return;
    }
    if (i >= candidates.length || total > target) return;

    currentCandidates.push(candidates[i]);
    dfs(i, currentCandidates, total + candidates[i]);
    currentCandidates.pop();
    dfs(i + 1, currentCandidates, total);

    return;
  };

  const result = [];

  dfs(0, [], 0);

  return result;
}

console.time("combinationSum");
const res = combinationSum([2, 3, 6, 7], 7);
console.log(res);
console.timeEnd("combinationSum");
