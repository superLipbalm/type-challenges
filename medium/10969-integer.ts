type Integer<T extends number> = number extends T ? never : `${T}` extends `${infer IntegerParts}.${infer FractionalParts}` ? never : T;
