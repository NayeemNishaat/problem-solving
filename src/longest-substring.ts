// export function lengthOfLongestSubstring(s: string): number {
//   let max = 0;

//   for (let i = 0; i < s.length; i++) {
//     let current = 0;
//     const ht = {};

//     for (let j = i; j < s.length; j++) {
//       if (!ht[s[j]]) {
//         current++;
//         ht[s[j]] = true;
//       } else break;
//     }
//     max = Math.max(current, max);
//   }
//   return max;
// }

// Part: Efficient Solution
export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  let max = 1;
  let current = 1;
  const set = new Map();
  set.set(s[0], 0);
  for (let i = 1; i < s.length; ++i) {
    const char = s[i];
    if (!set.has(char)) set.set(char, i), ++current;
    else {
      const prev = set.get(char);
      set.set(char, i);

      const distance = i - prev;

      if (distance > current) ++current;
      else current = distance;
    }
    max = Math.max(max, current);
  }
  return max;
}

console.log(lengthOfLongestSubstring("pwwkewwyy qwertp"));

function solution(s: string) {
  const map = new Map();
  let maxCount = 0,
    left = 0;

  for (let right = 0; right < s.length; ) {
    if (!map.has(s[right])) {
      map.set(s[right], right);
    } else {
      const prev = map.get(s[right]);
      map.set(s[right], right);
      if (prev >= left) left = prev + 1;
    }
    right++;

    maxCount = Math.max(maxCount, right - left);
  }

  return maxCount;
}
console.log(solution("dvdf"));
