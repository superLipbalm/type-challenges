type Fibonacci<
  T extends number,
  Prev extends any[] = [],
  Now extends any[] = [1],
  Count extends any[] = [1]
> = Count['length'] extends T ? Now['length'] : Fibonacci<T, Now, [...Prev, ...Now], [...Count, 1]>;
