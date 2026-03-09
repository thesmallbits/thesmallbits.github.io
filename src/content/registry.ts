import { generateElementsFrom, Registry } from "@d1vij/jassm";
// import { Registry } from "./R";
import * as v from "valibot";
import Image from "@/components/MDX";
import { Anchor } from "@/components/MDX/Anchor";

export const Elements = generateElementsFrom(
    {
        Image,
        a: Anchor,
    },
    true,
);

export const registry = new Registry({
    modulesGlob: import.meta.glob("/src/assets/mdx/blogs/**/*.mdx"),
    metadataGlob: import.meta.glob("/src/assets/mdx/blogs/**/*.meta.ts", {
        eager: true,
        import: "meta",
    }),
    root: "/src/assets/mdx/blogs",
    virtual: "/",
});

// NOTE: remove diff check once jassm gets stable
const diffResults = registry.diffKeys();
if (diffResults) {
    throw diffResults.error;
}

export type RegistryType = typeof registry;
console.log(registry.keys);
/**
 * Schema for validating entries of registry
 */
export const RegistryKeySchema = v.pipe(v.picklist(registry.keys));

export default registry;
