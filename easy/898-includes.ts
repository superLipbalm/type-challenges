type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false;

type Includes<T extends readonly any[], U> = T extends [infer E, ...infer Rest]
  ? Equal<E, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
