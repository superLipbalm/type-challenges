type Merge<T> = { [Key in keyof T]: T[Key] };
type PartialByKeys<T, K = keyof T> = Merge<
  { [Key in keyof T as Key extends K ? never : Key]: T[Key] } & {
    [Key in keyof T as Key extends K ? Key : never]?: T[Key];
  }
>;
