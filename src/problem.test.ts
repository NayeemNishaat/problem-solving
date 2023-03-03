function generic(haystack: string, needle: string): any {
  let j = 0,
    k = 0;
  for (let i = 0; i < haystack.length; ) {
    if (haystack[k] === needle[j]) j++, k++;
    else (j = 0), (k = ++i);
    if (j === needle.length) return i;
  }
  return -1;
}
console.log(generic("oraorangeorangy", "oran"));
