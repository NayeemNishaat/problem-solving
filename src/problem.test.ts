function leastInterval(tasks: string[], n: number): number {
  if (n === 0) return tasks.length;

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
    console.log(map, res, i, lookupMap);
    if (
      map.get(options[i]) !== 0 &&
      (!lookupMap.has(options[i]) || lookupMap.get(options[i]) <= res.length)
    ) {
      res.push(options[i]);
      lookupMap.set(options[i], res.length + n);
      map.set(options[i], map.get(options[i]) - 1);
      i++;
      if (i === options.length) i = 0;
    } else if (map.get(options[i]) === 0) {
      map.delete(options[i]);
      i++;
      if (i === options.length) i = 0;
    } else {
      res.push("");
      // i++;
      // if (i === options.length) i = 0;
    }
  }

  console.log(res);
  return res.length;
}
console.log(
  leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)
);
