type ToPrimitive<Input extends Record<string, unknown> | unknown[]> = {
  [key in keyof Input]: Input[key] extends Record<string, unknown> | unknown[]
    ? ToPrimitive<Input[key]>
    : Input[key] extends Readonly<Record<string, unknown>> | readonly unknown[]
    ? ToPrimitive<Readonly<Input[key]>>
    : Input[key] extends string
    ? string
    : Input[key] extends number
    ? number
    : Input[key] extends boolean
    ? boolean
    : Input[key] extends undefined
    ? undefined
    : Input[key] extends null
    ? null
    : Input[key] extends symbol
    ? symbol
    : Input[key] extends bigint
    ? bigint
    : Input[key] extends Function
    ? Function
    : never;
};
