type Absolute<T extends number | string | bigint> = `${T}` extends `${infer A}${infer B}`
  ? A extends '-'
    ? `${B}`
    : `${T}`
  : `${T}`;
