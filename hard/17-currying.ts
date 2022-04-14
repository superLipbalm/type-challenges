type Curry<Args extends unknown[], Result> = Args extends [...infer Rest, infer Arg]
  ? Curry<Rest, (a: Arg) => Result>
  : Result;
declare function Currying<Fn>(
  fn: Fn
): Fn extends (...args: infer Args) => infer Return ? Curry<Args, Return> : never;
