import { Registry } from "@d1vij/jassm";
import * as v from "valibot";

export const blogRegistry = new Registry({
    modulesGlob: import.meta.glob("/src/assets/mdx/blogs/**/*.mdx"),
    metadataGlob: import.meta.glob("/src/assets/mdx/blogs/**/*.meta.ts", {
        eager: true,
        import: "meta",
    }),
    root: "/src/assets/mdx/blogs",
    virtual: "",
});

// NOTE: remove diff check once jassm gets stable
const diffResults = blogRegistry.diffKeys();
if (diffResults) {
    throw diffResults.error;
}

export type BlogRegistryType = typeof blogRegistry;
/**
 * Schema for validating entries of registry
 */
export const BlogRegistryKeySchema = v.picklist(blogRegistry.keys);
export type BlogRegistryKey = (typeof blogRegistry.keys)[number];

export default blogRegistry;
