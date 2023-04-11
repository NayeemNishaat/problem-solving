function removeStars(s: string): string {
  const map = new Map();
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*" && s[i + 1] === "*") {
      count++;
      map.set(i, count);
    } else if (s[i] === "*") {
      count++;
      map.set(i, count);
    } else count = 0;
  }
  console.log(map);
  return;

  // let ns = "";
  // for (let i = 0; i < s.length; i++) {
  //   // if (s[i + 1] === "*") return removeStars(ns + s.slice(i + 2));
  //   if (s[i + 1] === "*" || s[i] === "*") {
  //     // return removeStars(ns + s.slice(i + 2));
  //   } else ns += s[i];
  // }
  // return ns;
}
console.log(removeStars("leet***cod*e"));
// console.log(removeStars(Array(100).fill("fhh**j*we*").join("")));
// console.log(Array(10000).fill("fhh**j*we*").join(""));
