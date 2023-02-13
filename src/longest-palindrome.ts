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
console.log(longestPalindrome("aaaracecccccaraaatattarrattat"));
