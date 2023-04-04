function solution(s: string) {
  const map = new Map();
  let count = 0,
    maxCount = 0,
    right = 0;

  for (let left = 0; left < s.length && right < s.length; ) {
    if (map.has(s[right]))
      map.clear(), (count = 1), left++, (right = left + 1), map.set(s[left], 1);
    else {
      count++;
      maxCount = Math.max(maxCount, count);
      map.set(s[right], 1);
      right++;
    }
  }

  return maxCount;
}
console.log(solution("abbba"));
