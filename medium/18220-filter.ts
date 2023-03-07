type Filter<T extends any[], P, Result extends any[] = []> = T extends [infer El, ...infer Rest]
  ? El extends P
    ? Filter<Rest, P, [...Result, El]>
    : Filter<Rest, P, Result>
  : Result;
