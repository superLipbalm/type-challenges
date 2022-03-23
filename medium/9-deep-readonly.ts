type DeepReadonly<T> = {
  readonly [Key in keyof T]: T[Key] extends { [key: string]: unknown }
    ? DeepReadonly<T[Key]>
    : T[Key];
};
