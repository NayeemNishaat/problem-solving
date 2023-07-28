function leastInterval(tasks: string[], n: number): number {
  if (n === 0) return tasks.length;

  tasks.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  const map = new Map();
  const lookupMap = new Map();

  tasks.forEach((t) => {
    if (map.has(t)) map.set(t, map.get(t) + 1);
    else map.set(t, 1);
  });

  const options = [...map.keys()];
  const res = [];
  let i = 0;

  while (map.size && res.length < 100) {
    if (
      map.get(options[i]) &&
      (!lookupMap.has(options[i]) || lookupMap.get(options[i]) <= res.length)
    ) {
      res.push(options[i]);
      lookupMap.set(options[i], res.length + n);
      map.set(options[i], map.get(options[i]) - 1);
      i++;
      if (i === options.length || lookupMap.get(options[0]) <= res.length)
        i = 0;
    } else if (map.get(options[i]) === 0) {
      map.delete(options[i]);
      options.splice(i, 1);

      if (i === options.length) i = 0;
    } else {
      res.push("");
    }
  }
  console.log(res);
  return res.length;
}
console.log(
  leastInterval(["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"], 2)
);

// [
//   [1, 4],
//   [5, 3],
//   [10, 1]
// ].sort((a, b) => {
//   if (a[1] > b[1]) return 1;
//   if (a[1] < b[1]) return -1;
//   return 0;
// });

// ["A", "E", "B"].sort((a, b) => -1 * a.localeCompare(b));
// ["A", "E", "B"].sort((a, b) => b.localeCompare(a));
// users.sort((a, b) => a.firstname.replace(/\D/g, '').localeCompare(b.firstname.replace(/\D/g, '')));

// const collator = new Intl.Collator("en-US");
// function sortAsc(a, b) {
//   if (typeof a === "string" && typeof b === "string") {
//     return collator.compare(b, a);
//   }
//   return b - a;
// }

// tasks.sort((a, b) => {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// });
