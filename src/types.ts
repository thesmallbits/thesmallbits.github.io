// biome-ignore format: looks ugly when formatted
export type LowerLetters = | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";
export type Numbers = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0";
export type Alphabets = LowerLetters | Uppercase<LowerLetters> | Numbers | (string & {});

/**
 * Extract the keys whose values are of given type
 */
export type KeysWithValueAsType<M, V> = Extract<
    {
        [K in keyof M]: M[K] extends V ? K : never;
    }[keyof M],
    string
>;

export type CompareableType = string | number | bigint;

export type KeysWithComparableValue<T> = {
    [K in keyof T]: T[K] extends CompareableType ? K : never;
}[keyof T];
