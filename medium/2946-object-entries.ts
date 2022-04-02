type ObjectEntries<T> = keyof T extends infer Key
  ? Key extends keyof T
    ? [Key, Required<T>[Key] extends never ? undefined : Required<T>[Key]]
    : never
  : never;
