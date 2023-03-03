function generic(s: string, t: string): any {
  if (s.length !== t.length) return false;

  const map = new Map();
  for (let i = 0; i < s.length; i++)
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);

  for (let j = 0; j < t.length; j++)
    if (map.get(t[j]) > 0) map.set(t[j], map.get(t[j]) - 1);
    else return false;

  return true;
}
console.log(generic("aacc", "ccac"));
