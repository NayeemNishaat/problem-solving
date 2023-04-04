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
