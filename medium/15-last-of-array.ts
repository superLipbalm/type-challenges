type Last<T extends any[]> = T extends [...rest: infer Rest, last: infer Last] ? Last : never;
