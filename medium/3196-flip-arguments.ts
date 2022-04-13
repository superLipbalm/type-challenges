type Reverse<T extends any[], Result extends any[] = []> = T extends [infer Element, ...infer Rest]
  ? Reverse<Rest, [Element, ...Result]>
  : Result;

type FlipArguments<T> = T extends (...args: infer Args) => infer R
  ? (...args: Reverse<Args>) => R
  : T;
