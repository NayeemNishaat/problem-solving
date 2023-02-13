export function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let current = 0;
  const ht = {};

  for (let i = 0; i < s.length; i++) {
    if (!ht[s[i]]) {
      current++;
      ht[s[i]] = true;
    }
    max = Math.max(current, max);
    current = 0;
  }
  return max;
}
console.log(lengthOfLongestSubstring("abcabcbb"));
