type DropChar<S, C, Result extends string = ''> = S extends `${infer A}${infer Rest}`
  ? A extends C
    ? DropChar<Rest, C, Result>
    : DropChar<Rest, C, `${Result}${A}`>
  : Result;
