export function countVowelSubstrings(w: string): number {
  const map = new Map();

  let vow = 0,
    j = 0,
    k = 0,
    cnt = 0;

  ["a", "e", "i", "o", "u"].forEach((v) => map.set(v, 0));

  for (let i = 0; i < w.length; i++) {
    if (map.has(w[i])) {
      map.set(w[i], map.get(w[i]) + 1);
      map.get(w[i]) === 1 && vow++;
      while (vow === 5) {
        map.set(w[k], map.get(w[k]) - 1);
        map.get(w[k]) === 0 && vow--;
        k++;
      }
      cnt += k - j;
    } else {
      ["a", "e", "i", "o", "u"].forEach((v) => map.set(v, 0));
      vow = 0;
      j = i + 1;
      k = i + 1;
    }
  }
  return cnt;
}
console.log(countVowelSubstrings("str"));
