export function shipWithinDays(weights: number[], days: number): number {
  let maxWeight = Math.max(...weights);
  let totalWeight = weights.reduce((acc, el) => acc + el, 0);
  let mid = 0;

  function shippable(capacity: number) {
    let load = 0,
      i = 0,
      d = 1;
    while (i < weights.length) {
      if (load + weights[i] <= capacity) load += weights[i];
      else (load = weights[i]), ++d;
      i++;
    }
    return d;
  }

  while (maxWeight <= totalWeight) {
    mid = ~~((maxWeight + totalWeight) / 2);

    if (maxWeight === totalWeight) return mid;
    if (shippable(mid) <= days) {
      totalWeight = mid;
    } else maxWeight = mid + 1;
  }
}
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
