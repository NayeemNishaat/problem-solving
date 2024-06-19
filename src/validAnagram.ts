function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (const val of s) {
    map.set(val, (map.get(val) || 0) + 1);
  }

  for (const val of t) {
    if (!map.has(val) || map.get(val) < 1) return false;
    else {
      map.set(val, map.get(val) - 1);
    }
  }

  return true;
}
console.log(isAnagram("anagram", "nagaram"));
