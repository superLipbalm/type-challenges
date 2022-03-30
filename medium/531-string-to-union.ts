type StringToUnion<
  T extends string,
  Acc extends string[] = []
> = T extends `${infer A}${infer Rest}` ? StringToUnion<Rest, [...Acc, A]> : Acc[number];
