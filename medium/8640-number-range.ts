type ConstructTuple<L extends number, Result extends unknown[] = []> = Result['length'] extends L
  ? Result
  : ConstructTuple<L, [...Result, unknown]>;

type NumberRange<
  L extends number,
  H extends number,
  Acc extends unknown[] = ConstructTuple<L>,
  Result = L
> = Acc['length'] extends H
  ? Result | L
  : [...Acc, unknown]['length'] extends number
  ? NumberRange<[...Acc, unknown]['length'], H, [...Acc, unknown], Result | L>
  : never;
