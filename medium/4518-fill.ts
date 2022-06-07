type ConstructTuple<L extends number, Result extends unknown[] = []> = Result['length'] extends L
  ? Result
  : ConstructTuple<L, [...Result, unknown]>;

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Count extends unknown[] = ConstructTuple<Start>,
  Result extends any[] = []
> = End extends Count['length']
  ? Result
  : Start extends Count['length']
  ? [...Count, unknown]['length'] extends number
    ? Fill<T, N, [...Count, unknown]['length'], End, [...Count, unknown], [...Result, N]>
    : never
  : Fill<T, N, Start, End, [...Count, unknown], [...Result, T[Count['length']]]>;
