function generic(s: string): any {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++, right--;
  }
  return true;
}
console.log(generic(" "));
