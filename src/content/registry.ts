import { generateElementsFrom, Registry } from "@d1vij/jassm";
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
    virtual: "",
});

console.log(registry);
export type RegistryType = typeof registry;
/**
 * Schema for validating entries of registry
 */
export const RegistryKeySchema = v.picklist(registry.keys);

export default registry;
