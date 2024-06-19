function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const copyX = x;
  let reversed = 0;
  while (x) {
    const last = x % 10;
    x = Math.trunc(x / 10);

    reversed = reversed * 10 + last;
  }

  return copyX === reversed;
}
console.log(isPalindrome(122));
