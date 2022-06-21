type Zip<A extends any[], B extends any[], R extends any[] = []> = A extends [
  infer AE,
  ...infer ARest
]
  ? B extends [infer BE, ...infer BRest]
    ? Zip<ARest, BRest, [...R, [AE, BE]]>
    : R
  : R;
