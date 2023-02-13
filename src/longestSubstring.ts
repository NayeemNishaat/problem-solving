export function lengthOfLongestSubstring(s: string): number {
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let current = 0;
    const ht = {};

    for (let j = i; j < s.length; j++) {
      if (!ht[s[j]]) {
        current++;
        ht[s[j]] = true;
      } else break;
    }
    max = Math.max(current, max);
  }
  return max;
}
console.log(lengthOfLongestSubstring("pwwkewxyy"));
