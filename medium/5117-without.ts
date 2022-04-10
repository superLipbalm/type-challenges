type Without<T, U, Result extends any[] = []> = T extends [infer A, ...infer Rest]
  ? A extends U[keyof U] | U
    ? Without<Rest, U, Result>
    : Without<Rest, U, [...Result, A]>
  : Result;
