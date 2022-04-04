type Unique<T extends any[], Result extends any[] = []> = T extends [infer A, ...infer Rest]
  ? A extends Result[number]
    ? Unique<Rest, Result>
    : Unique<Rest, [...Result, A]>
  : Result;
