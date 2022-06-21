type Chunk<
  T extends any[],
  N extends number,
  C extends any[] = [],
  R extends any[] = []
> = T extends [infer A, ...infer Rest]
  ? C['length'] extends N
    ? Chunk<T, N, [], [...R, C]>
    : Chunk<Rest, N, [...C, A], R>
  : C['length'] extends N
  ? [...R, C]
  : C extends []
  ? R
  : [...R, C];
