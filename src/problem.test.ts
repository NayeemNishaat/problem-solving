function groupAnagrams(strs: string[]): string[][] {
  const res = [];
  const seen = {};

  for (let i = 0; i < strs.length; i++) {
    const temp = [strs[i]];
    if (seen[strs[i]]) continue;

    for (let j = 0; j < strs.length; j++) {
      if (i === j || seen[strs[j]]) continue;
      let a = true;

      for (let k = 0; k < strs[j].length; k++) {
        if (!strs[i].includes(strs[j][k])) {
          a = false;
          break;
        }
      }

      if (a) {
        seen[strs[j]] = true;
        seen[strs[i]] = true;
        temp.push(strs[j]);
      }
    }
    res.push(temp);
  }
  return res;
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
