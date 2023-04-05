function solution(s: string) {
  if (s.length < 2) return s;
  let left = 0,
    right = 0,
    max = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      (right = i), (left = i - 1);
      while (s[left] === s[right] && left >= 0 && right < s.length)
        left--, right++;
      // console.log(left, right);
      if (max.length < right-- - left++) max = s.slice(left, right + 1);
    }

    if (s[i - 1] === s[i + 1]) {
      (right = i + 1), (left = i - 1);
      while (s[left] === s[right] && left >= 0 && right < s.length)
        left--, right++;

      // console.log(left, right, 5);
      if (max.length < right-- - left++) max = s.slice(left, right + 1);
    }
  }

  return max ? max : s[0];
}
console.log(solution("abcd"));
