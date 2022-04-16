type LengthOfString<
  S extends string,
  CharList extends string[] = []
> = S extends `${infer A}${infer Rest}`
  ? LengthOfString<Rest, [...CharList, A]>
  : CharList['length'];
