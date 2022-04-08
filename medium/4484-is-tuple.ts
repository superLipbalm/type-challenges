type IsTuple<T extends any> = T extends readonly [infer A, ...infer Rest]
  ? true
  : T extends []
  ? true
  : false;
