import type { Metadata, MetadataKey } from "@/schemas";
import type { Alphabets, CompareableType, KeysWithComparableValue, KeysWithValueAsType } from "@/types";

export type GroupedMetadata<Key> = Map<Key, Metadata[]>;

/**
 * Groups metadata based on values of for a the given key
 * @param metadatas
 * @param based
 * Key on which's value we should group metadata. The key's value must be a {@link CompareableType}
 * @returns
 *  GroupedMetadata with groups based on values of Metadata object with Based as key.
 */
export function groupMetadataOnValues<Based extends MetadataKey>(
    metadatas: Metadata[],
    based: Based extends KeysWithComparableValue<Metadata> ? Based : never,
): GroupedMetadata<Metadata[Based]> {
    const groups = new Map<Metadata[Based], Metadata[]>();

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
export function groupAlphabetically<Based extends KeysWithValueAsType<Metadata, string>, Metadatas extends Metadata[]>(
    metadatas: Metadatas,
    based: Based,
    caseSensitive: boolean = true,
): GroupedMetadata<Alphabets> {
    const groups = new Map();

    for (const metadata of metadatas) {
        const value = metadata[based];
        let letter = value.charAt(0);
        if (!caseSensitive) letter = letter.toLowerCase();

        const arr = groups.getOrInsert(letter, []);
        arr.push(metadata);
    }

    return groups;
}
