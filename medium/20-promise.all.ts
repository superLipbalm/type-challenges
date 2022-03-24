declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [Key in keyof T]: T[Key] extends Promise<infer A> ? A : T[Key] }>;
