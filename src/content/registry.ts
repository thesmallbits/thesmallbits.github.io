import { type ElementProps, generateElementsFrom, Registry } from "@d1vij/jassm";
import * as v from "valibot";
import { Anchor, Header, Image } from "@/components/MDX";

export const Elements = generateElementsFrom(
    {
        Image,
        a: Anchor,
        h1: (props: ElementProps<"h1">) => Header({ ...props, level: 1 }),
        h2: (props: ElementProps<"h1">) => Header({ ...props, level: 2 }),
        h3: (props: ElementProps<"h1">) => Header({ ...props, level: 3 }),
        h4: (props: ElementProps<"h1">) => Header({ ...props, level: 4 }),
        h5: (props: ElementProps<"h1">) => Header({ ...props, level: 5 }),
        h6: (props: ElementProps<"h1">) => Header({ ...props, level: 6 }),
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

// NOTE: remove diff check once jassm gets stable
const diffResults = registry.diffKeys();
if (diffResults) {
    throw diffResults.error;
}

export type RegistryType = typeof registry;
/**
 * Schema for validating entries of registry
 */
export const RegistryKeySchema = v.picklist(registry.keys);
export type RegistryKey = (typeof registry.keys)[number];

export default registry;
