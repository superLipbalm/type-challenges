type Curry<Args extends unknown[], Result> = Args extends [...infer Rest, infer Arg]
  ? Curry<Rest, (a: Arg) => Result>
  : Result;
type Format<
  T extends string,
  Args extends any[] = []
> = T extends `${infer S}%${infer Arg}${infer Rest}`
  ? Arg extends 's'
    ? Format<Rest, [...Args, string]>
    : Arg extends 'd'
    ? Format<Rest, [...Args, number]>
    : Format<Rest, Args>
  : Args extends []
  ? string
  : Curry<Args, string>;
