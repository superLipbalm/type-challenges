type Trunc<
  T extends string | number,
  Result extends string = ''
> = `${T}` extends `${infer A}${infer Rest}`
  ? A extends '.'
    ? Result
    : Trunc<Rest, `${Result}${A}`>
  : Result;
