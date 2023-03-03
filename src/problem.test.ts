function generic(s: string, t: string): any {
  if (s.length !== t.length) return false;

  const map = new Map();
  for (const val of s) map.set(val, (map.get(val) || 0) + 1);
  for (const val of t)
    if (map.get(val) > 0) map.set(val, map.get(val) - 1);
    else return false;
  return true;
}
console.log(generic("aacc", "caac"));
