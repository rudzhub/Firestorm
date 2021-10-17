export type ArrayElement<Array> = Array extends (infer Element)[] ? Element : never;
export type SimpleField = number | string | boolean;
