function removeStars(s: string): string {
  let ns = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] === "*") return removeStars(ns + s.slice(i + 2));
    else ns += s[i];
  }
  return ns;
}
console.log(removeStars(Array(1000).fill("fhh**j*we*").join("")));
// console.log(Array(10000).fill("fhh**j*we*").join(""));
