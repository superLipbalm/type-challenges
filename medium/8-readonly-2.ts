type MyReadonly2<T, K = keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
} & {
  readonly [Key in keyof T]: T[Key];
};
