type PercentageParser<
  A extends string,
  Sign extends string = '',
  Number extends string = '',
  Percentage extends string = ''
> = A extends `${infer Char}${infer Rest}`
  ? Char extends '+' | '-'
    ? PercentageParser<Rest, Char, Number, Percentage>
    : Char extends '%'
    ? PercentageParser<Rest, Sign, Number, Char>
    : PercentageParser<Rest, Sign, `${Number}${Char}`, Percentage>
  : [Sign, Number, Percentage];
