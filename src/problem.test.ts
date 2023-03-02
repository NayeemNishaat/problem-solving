function generic(s: string): any {
  const map = new Map<string, number[]>();

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (map.has(curr)) map.set(curr, [1 + map.get(curr)[0], i]);
    else map.set(curr, [1, i]);
  }

  const min = Math.min(
    ...[...map.values()].filter((el) => el[0] === 1).map((el) => el[1])
  );

  if (min === Infinity) return -1;
  else return min;
}
console.log(generic("aacbb"));
