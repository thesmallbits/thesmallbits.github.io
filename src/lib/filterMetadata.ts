import type {
    RegistryMetadata,
    RegistryMetadataKeys,
    RegistryMetadataKeysWithStringValues,
} from "@/schemas";

export function filterMetadataBasedOnRegex<Based extends RegistryMetadataKeys>(
    metadatas: RegistryMetadata[],
    based: Based extends RegistryMetadataKeysWithStringValues ? Based : never,
    regex: RegExp,
): RegistryMetadata[] {
    return metadatas.filter((m) => regex.test(m[based]));
}
