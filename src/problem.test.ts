function leastInterval(tasks: string[], n: number): number {
  const frequencies = new Map<string, number>();

  for (const task of tasks)
    frequencies.set(task, (frequencies.get(task) || 0) + 1);

  const maxFrequency = Math.max(...frequencies.values());
  const numberOfMaxFrequencies = [...frequencies.values()].reduce(
    (acc, v) => (v === maxFrequency ? 1 : 0) + acc,
    0
  );

  return Math.max(
    (maxFrequency - 1) * (n + 1) + numberOfMaxFrequencies,
    tasks.length
  );
}
