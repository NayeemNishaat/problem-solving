function removeStars(s: string): string {
  // Part: With Array
  const sArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") sArr.pop();
    else sArr.push(s[i]);
  }
  return sArr.join("");

  // Part: Without Array
  /* for (let i = 0; i < s.length; ) {
    if (s[i + 1] === "*") {
      s = s.slice(0, i) + s.slice(i + 2);
      i--;
    } else i++;
  }
  return s; */

  // Part: Recursive but CallStack Size Exceeds
}
console.log(removeStars("abb*cdfg*****x*"));
console.log(removeStars("leet**cod*e"));
// console.log(Array(10000).fill("fhh**j*we*").join(""));
// console.log(Array(10000).fill("fhh**j*we*").join(""));
