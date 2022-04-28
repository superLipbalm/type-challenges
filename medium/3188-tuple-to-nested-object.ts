type TupleToNestedObject<T extends string[], U> = T extends [...infer Rest, infer Key]
  ? Key extends string
    ? Rest extends string[]
      ? TupleToNestedObject<Rest, { [K in Key]: U }>
      : never
    : never
  : U;
