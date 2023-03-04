function generic(s: string): any {
  // s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // console.log(s.match(/^[-+]?\d+/));

  const int = Number.parseInt(s);

  if (int > 2147483647) return 2147483647;
  else if (int < -2147483648) return -2147483648;
  return Number.isNaN(int) ? 0 : int;
}
console.log(generic("  g  -987u"));
