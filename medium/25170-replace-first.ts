type ReplaceFirst<
  T extends readonly unknown[],
  S,
  R,
  Checked extends unknown[] = [],
  Unchecked extends readonly unknown[] = T
> = T extends [infer First, ...infer Rest]
  ? First extends S
    ? [...Checked, R, ...Rest]
    : ReplaceFirst<Rest, S, R, [...Checked, First], Rest>
  : [...Checked, ...Unchecked];
