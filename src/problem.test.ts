function removeStars(s: string): string {
  // const map = new Map();
  // let count = 0,
  //   currentIndex = Infinity,
  //   ini = Infinity;
  // // Part: Count Contageous Stars
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === "*" && s[i + 1] === "*") {
  //     count++;
  //     if (ini + 1 === i) map.set(currentIndex, count), ini++;
  //     else (currentIndex = i), (ini = i);
  //   } else if (s[i] === "*") {
  //     count++;
  //     if (ini + 1 === i) map.set(currentIndex, count), ini++;
  //     else map.set(i, count);
  //   } else count = 0;
  // }
  // // Part: Remove Items From String
  // let ns = "",
  //   b = 0;
  // map.forEach((v, k) => {
  //   ns = s.slice(b, k - v);
  //   ns += s.slice(k + v);
  //   // b = k + v;
  //   console.log(ns);
  // });
  // ns += s.slice(b);
  // return ns;

  // Part: Iterative
  for (let i = 0; i < s.length; ) {
    if (s[i + 1] === "*") {
      s = s.slice(0, i) + s.slice(i + 2);
      i--;
    } else i++;
  }
  return s;
}
console.log(removeStars("abb*cdfg*****x*"));
// console.log(removeStars("leet**cod*e"));
// console.log(removeStars(Array(100).fill("fhh**j*we*").join("")));
// console.log(Array(10000).fill("fhh**j*we*").join(""));
// console.log(Array(10000).fill("fhh**j*we*").join(""));
