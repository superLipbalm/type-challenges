type Push<T extends any[], U> = U[] extends T[number][] ? T : [...T, U];
