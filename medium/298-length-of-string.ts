type LengthOfString<
  S extends string,
  Acc extends string[] = []
> = S extends `${infer A}${infer Rest}` ? LengthOfString<Rest, [...Acc, A]> : Acc['length'];
