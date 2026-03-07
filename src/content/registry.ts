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
    // biome-ignore lint/suspicious/noTsIgnore: Yeah ill fix
    // @ts-ignore
    virtual: "",
});

// NOTE: remove diff check once jassm gets stable
const diffResults = registry.diffKeys();
if (diffResults) {
    throw diffResults.error;
}

export type RegistryType = typeof registry;
/**
 * Schema for validating entries of registry
 */
// FIXME: Add proper registry key validation.
// Would be only possible when it gets fixed in jassm
// it works but tab tak ke liye we lose typings in content 🤷‍♂
// export const RegistryKeySchema = v.picklist(registry.keys);
export const RegistryKeySchema = v.string();

export default registry;
