function solution(s: string) {
  let count = 0,
    left = 0,
    right = 0,
    uniqueVow = 0;
  const map = new Map();
  ["a", "e", "i", "o", "u"].forEach((v) => map.set(v, 0));

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
      if (map.get(s[i]) === 1) uniqueVow++;
      while (uniqueVow === 5) {
        map.set(s[right], map.get(s[right]) - 1);
        if (map.get(s[right]) === 0) uniqueVow--;
        right++;
      }
      count += right - left;
    } else {
      ["a", "e", "i", "o", "u"].forEach((v) => map.set(v, 0));
      (left = i + 1), (right = i + 1);
    }
  }
  return count;
}
console.log(solution("aeiouaa"));
