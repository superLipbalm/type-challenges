type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [Key in keyof T]: T[Key] extends R['mapFrom']
    ? R extends { mapFrom: T[Key]; mapTo: any }
      ? R['mapTo']
      : never
    : T[Key];
};
