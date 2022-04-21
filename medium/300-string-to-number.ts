type ToNumber<S extends string, R extends unknown[] = []> = `${R['length']}` extends S
  ? R['length']
  : ToNumber<S, [...R, 1]>;
