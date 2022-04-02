type LastIndexOf<T, U> = T extends [...infer Rest, infer A]
  ? A extends U
    ? Rest['length']
    : LastIndexOf<Rest, U>
  : -1;
