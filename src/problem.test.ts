function groupAnagrams(strs: string[]): string[][] {
  const res = [];
  const seen = {};

  for (let i = 0; i < strs.length; i++) {
    const temp = [strs[i]];
    if (seen[strs[i]]) {
      continue;
    }

    for (let j = 0; j < strs.length; j++) {
      if (i === j) continue;
      let a = true;
      const ob = {};
      if (strs[i].length !== strs[j].length) a = false;
      else if (strs[i] && !strs[j]) a = false;
      else {
        for (let k = 0; k < strs[j].length; k++) {
          ob[strs[i][k]] ? ob[strs[i][k]]++ : (ob[strs[i][k]] = 1);
        }

        for (let k = 0; k < strs[j].length; k++) {
          if (!ob[strs[j][k]]) {
            a = false;
            break;
          } else ob[strs[j][k]]--;
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
console.log(groupAnagrams(["ddg", "dgdt", "", "", ""]));
