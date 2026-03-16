import { useMemo } from "react";
import { getFromLocalStorage } from "@/lib";

/**
 * Lazily compute a value and store it in localStorage.
 * Computation only occurs either when the key is absent
 * or the build hash changes.
 *
 * The provided key is appended with a hash, which is unique for each commit.
 * @param key Key for the value to fetch
 * @param callback Function returning a string which will be stored in
 * @returns Stringified version of value
 */
export function useLocalStorageWithCache(
    key: string,
    callback: () => string,
): string {
    const value = useMemo(() => {
        return getFromLocalStorage(key, callback);
    }, [key, callback]);
    return value;
}
