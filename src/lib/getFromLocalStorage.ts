let hash = __BUILD_HASH__;

// Use random UUID when in dev mode to ensure that caches are invalidated on each reload
if (import.meta.hot) {
    hash = crypto.randomUUID();
    console.log(hash);
}

/**
 * Retrieves a value from localStorage using a key that is namespaced by the
 * current build hash. If the value does not exist, it is computed using the
 * provided callback, stored, and then returned.
 *
 * Useful for caching expensive computations whose's results should
 * persist across page reloads but be recomputed after a new build.
 *
 * @param key
 * Base key used to store the value. The final key stored in localStorage
 * becomes "<key>-<latest commit hash>".
 *
 * @param callback
 * Function invoked to compute the value when no cached value exists for the
 * generated key.
 *
 * @returns
 * The cached or newly computed string value associated with the generated key.
 */
export function getFromLocalStorage(key: string, callback: () => string) {
    // if we use the key as is, same cached value will be used across builds.
    // which may result into stale cached data being used
    // one drawback of this approach might be polluting the localStorage over time
    // maybe we could clear all cached data after some specified time ??
    const keyPlusHash = `${key}-${hash}`;

    const item = localStorage.getItem(keyPlusHash);
    if (item) return item;

    const value = callback();
    localStorage.setItem(keyPlusHash, value);
    return value;
}
