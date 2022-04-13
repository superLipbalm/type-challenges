type Flip<T extends Record<string | number, string | number | boolean>> = {
  [Key in keyof T as `${T[Key]}`]: Key;
};
