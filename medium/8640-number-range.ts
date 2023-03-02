type ConstructTuple<L extends number, Result extends unknown[] = []> = Result['length'] extends L
  ? Result
  : ConstructTuple<L, [...Result, unknown]>;

type NumberRange<
  L extends number,
  H extends number,
  Count extends unknown[] = ConstructTuple<L>,
  Result = L
> = Count['length'] extends H
  ? Result
  : NumberRange<L, H, [...Count, unknown], Result | [...Count, unknown]['length']>;
