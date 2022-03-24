type Pop<T extends any[]> = T extends [...rest: infer Rest, last: infer Last] ? Rest : never;
