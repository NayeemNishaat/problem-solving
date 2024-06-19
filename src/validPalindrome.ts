function isPalindromeStr(s: string): boolean {
  s = s.toLowerCase();
  s = s.replace(/[^a-zA-Z0-9]/g, "");

  const revS = s.split("").reverse().join("");

  return revS === s;
}
console.log(isPalindromeStr("race  car"));
