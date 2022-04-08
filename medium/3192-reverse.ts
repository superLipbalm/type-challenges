type Reverse<T extends any[], Result extends any[] = []> = T extends [infer Element, ...infer Rest]
  ? Reverse<Rest, [Element, ...Result]>
  : Result;
