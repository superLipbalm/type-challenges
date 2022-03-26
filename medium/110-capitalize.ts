type MyCapitalize<S extends string> = S extends `${infer C}${infer R}` ? `${Uppercase<C>}${R}` : '';
