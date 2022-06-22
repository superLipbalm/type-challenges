type FlattenArray<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...First, ...FlattenArray<Rest>]
    : [First, ...FlattenArray<Rest>]
  : T;

type FlattenDepth<
  T extends any[],
  N extends number = 1,
  Count extends any[] = [],
  Result extends any[] = Count['length'] extends N ? T : FlattenArray<T>
> = Result extends T ? Result : FlattenDepth<FlattenArray<T>, N, [...Count, 1]>;
