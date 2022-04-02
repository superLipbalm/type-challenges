type IndexOf<T, U, Acc extends any[] = []> = T extends [infer A, ...infer Rest]
  ? A extends U
    ? [...Acc]['length']
    : IndexOf<Rest, U, [...Acc, A]>
  : -1;
