function leastInterval(tasks: string[], n: number): number {
  if (n === 0) return tasks.length;

  const map = new Map();
  const lookupMap = new Map();

  tasks.forEach((t) => {
    if (map.has(t)) map.set(t, map.get(t) + 1);
    else map.set(t, 1);
  });

  let options = [...map.entries()];
  const res = [];
  let i = 0;

  options.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    return 0;
  });

  options = options.map((el) => el[0]);

  while (map.size) {
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

  return res.length;
}

console.log(
  // leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2) // 16
  leastInterval(["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "E", "E"], 2) // 12
);
