function romanToInt(s: string): number {
  const hash = new Map(
    Object.entries({
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    })
  );
  let num = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (hash.get(s[i]) < hash.get(s[i + 1])) num -= hash.get(s[i]);
    else num += hash.get(s[i]);
  }
  return num;
}
console.log(romanToInt("III"));
