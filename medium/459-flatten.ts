type Flatten<T extends any[], Acc extends any[] = []> = T extends [infer A, ...infer Rest]
  ? A extends any[]
    ? Flatten<[...A, ...Rest], Acc>
    : Flatten<Rest, [...Acc, A]>
  : Acc;
