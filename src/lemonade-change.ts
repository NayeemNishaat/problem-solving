function lemonadeChange(bills: number[]): boolean {
  let five = 0,
    ten = 0;

  for (let i = 0; i < bills.length; i++) {
    const el = bills[i];

    if (el === 5) five++;
    if (el === 10) ten++, five--;
    if (el === 20) {
      if (ten > 0) {
        ten--, five--;
      } else {
        five -= 3;
      }
    }

    if (five < 0) return false;
  }

  return true;
}
