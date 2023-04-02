function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();

  for (const str of strs) {
    const sorted = [...str].sort().join("");
    if (map.has(sorted)) map.get(sorted).push(str);
    else map.set(sorted, [str]);
  }

  return [...map.values()];
}
console.log(groupAnagrams(["ddg", "dgd", "", "", ""]));
