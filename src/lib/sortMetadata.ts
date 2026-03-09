import type { Metadata, MetadataKey } from "@/schemas";

/**
 *
 * @param metadatas Array of {@link Metadata} objects
 * @param based Key of {@link Metadata} on which to sort. The keys should be comparable
 * @returns Sorted array of {@link Metadata} objects based on ascending order
 */
export function sortMetadata(metadatas: Metadata[], based: MetadataKey) {
    return metadatas.toSorted((f, s) => {
        const first = f[based];
        const second = s[based];

        if (first === second) return 0;
        if (first == null) return -1;
        if (second == null) return 1;

        if (typeof first === "number" && typeof second === "number") {
            return first - second;
        }

        if (typeof first === "string" && typeof second === "string") {
            return first.localeCompare(second);
        }

        if (first instanceof Date && second instanceof Date) {
            return first.getTime() - second.getTime();
        }

        return String(first).localeCompare(String(second));
    });
}
