export function longestPalindrome(s: string): string {
  if (s.length === 1) return s;
  let longest = s[0];

  for (let i = 0; i < s.length; i++) {
    let current = "";

    if (s[i - 1] === s[i + 1]) {
      current = s[i];
      let n = 1;

      while (s[i - n] === s[i + n] && s[i + n]) (current += s[i + n]), ++n;

      current = s.slice(i - n + 1, i) + current;
      if (current.length > longest.length) longest = current;
    }

    if (s[i] === s[i + 1]) {
      current = s[i + 1];
      let n = 1;

      while (s[i - n] === s[i + 1 + n] && s[i + 1 + n])
        (current += s[i + 1 + n]), ++n;

      current = s.slice(i - n + 1, i + 1) + current;
      if (current.length > longest.length) longest = current;
    }
  }

  return longest;
}
console.log(longestPalindrome("aa"));

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

      if (max.length < right-- - left++) max = s.slice(left, right + 1);
    }

    if (s[i - 1] === s[i + 1]) {
      (right = i + 1), (left = i - 1);
      while (s[left] === s[right] && left >= 0 && right < s.length)
        left--, right++;

      if (max.length < right-- - left++) max = s.slice(left, right + 1);
    }
  }

  return max ? max : s[0];
}
console.log(solution("abcddd"));
