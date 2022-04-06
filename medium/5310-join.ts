type Join<T extends any[], U extends string | number, Result extends string = ''> = T extends [
  infer S,
  infer Next,
  ...infer Rest
]
  ? S extends string
    ? Join<[Next, ...Rest], U, `${Result}${S}${U}`>
    : never
  : `${Result}${T[0]}`;
