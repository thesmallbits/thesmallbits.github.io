import type {
    RegistryMetadata,
    RegistryMetadataKeys,
    RegistryMetadataKeysWithStringValues,
} from "@/schemas";
import type { CompareableType, KeysWithComparableValue } from "@/types";

export type GroupedMetadata<Key> = Map<Key, RegistryMetadata[]>;

/**
 * Groups metadata based on values of for a the given key
 * @param metadatas
 * @param based
 * Key on which's value we should group metadata. The key's value must be a {@link CompareableType}
 * @returns
 *  GroupedMetadata with groups based on values of Metadata object with Based as key.
 */
export function groupMetadataOnValues<Based extends keyof RegistryMetadata>(
    metadatas: RegistryMetadata[],
    based: Based extends KeysWithComparableValue<RegistryMetadataKeys>
        ? Based
        : never,
): GroupedMetadata<RegistryMetadata[Based]> {
    const groups = new Map<RegistryMetadata[Based], RegistryMetadata[]>();

    for (const metadata of metadatas) {
        const key = metadata[based];
        const arr = groups.getOrInsert(key, []);
        arr.push(metadata);
    }

    return groups;
}

/**
 *  Groups the metadatas based on groups of first character
 * @param metadatas
 * Array of metadatas
 * @param based
 * Group based on which key of metadata. The provided key's value must be a string.
 * @param caseSensitive
 * @default true
 * @returns
 * Grouped metadata with map with typed keys of lowercase letters, uppercase letters, numbers and any other but untyped single letter character
 */
export function groupMetadataAlphabetically<
    Based extends RegistryMetadataKeys,
    Metadatas extends RegistryMetadata[],
>(
    metadatas: Metadatas,
    based: Based extends RegistryMetadataKeysWithStringValues ? Based : never,
    caseSensitive: boolean = true,
) {
    const groups: Record<string, RegistryMetadata[]> = {};

    for (const metadata of metadatas) {
        const value = metadata[based];
        let letter = value.charAt(0);

        if (!caseSensitive) letter = letter.toLowerCase();
        const arr = groups[letter] ?? [];
        arr.push(metadata);
        groups[letter] = arr;
    }
    return groups;
}
