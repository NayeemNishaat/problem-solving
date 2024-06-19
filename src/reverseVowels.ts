function reverseVowels(s: string): string {
  const posVowels: number[] = [];
  const vowels: string[] = [];
  const v = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < s.length; i++) {
    const el = s[i];

    if (v.includes(el.toLowerCase())) {
      posVowels.push(i);
      vowels.push(el);
    }
  }

  vowels.reverse();

  const sArr = s.split("");
  for (let i = 0; i < posVowels.length; i++) {
    const el = posVowels[i];
    sArr[el] = vowels[i];
  }

  return sArr.join("");
}
console.log(reverseVowels("abce"));
