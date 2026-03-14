import * as v from "valibot";
import { BlogRegistryKeySchema } from "@/content/BlogRegistry";
import type { KeysWithValueAsType } from "@/types";

export const UNDEFINED_READING_TIME = -1;
export const UNDEFINED_QUOTE = "03c4e6ab-9849-4a15-8c38-ab97c6af547d";
export const UNDEFINED_QUOTE_AUTHOR = "894e9cab-0523-47b9-82c2-dcd300aa812c";

/**
 * Schema followed in blog's metadata
 */
export const UserDefinedMetadataSchema = v.object({
    author: v.string(),
    title: v.string(),
    created_at: v.date(),
    modified_at: v.date(),
    tags: v.array(v.string()),
    summary: v.optional(v.string(), ""),
    reading_minutes: v.optional(v.number(), UNDEFINED_READING_TIME),
});

export type UserDefinedMetadata = v.InferInput<typeof UserDefinedMetadataSchema>;
export type UserDefinedMetadataKey = keyof UserDefinedMetadata;

/**
 * Updated schema with system added information in it
 */
export const RegistryMetadataSchema = v.object({
    ...UserDefinedMetadataSchema.entries,
    __splat: BlogRegistryKeySchema,
});

export type RegistryMetadata = v.InferInput<typeof RegistryMetadataSchema>;
export type RegistryMetadataKeys = keyof RegistryMetadata;
/**
 * Registry Metadata keys whose values are strings
 */
export type RegistryMetadataKeysWithStringValues = KeysWithValueAsType<RegistryMetadata, string>;
