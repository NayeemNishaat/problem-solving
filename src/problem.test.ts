function solution(s: string) {
  const map = new Map();
  let count = 0,
    maxCount = 0,
    prev = 0,
    distance = 0;

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i), count++;
    } else {
      prev = map.get(s[i]);
      map.set(s[i], i);

      distance = i - prev;

      if (distance > count) count++;
      else count = distance;
    }

    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}
console.log(solution("abba"));
