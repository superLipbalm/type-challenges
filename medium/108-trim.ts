type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}`
  ? Trim<R>
  : S extends `${infer Rest}${' ' | '\n' | '\t'}`
  ? Trim<Rest>
  : S;
