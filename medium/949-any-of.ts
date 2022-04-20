type AnyOf<T extends readonly any[]> = T[number] extends
  | 0
  | ''
  | []
  | { [index: string]: never }
  | false
  ? false
  : true;
