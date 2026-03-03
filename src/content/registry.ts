import { CoalescedRegistry, generateElementsFrom, Registry } from "@d1vij/jassm";
import * as v from "valibot";
import Image from "@/components/MDXImage";

export const Elements = generateElementsFrom(
    {
        Image,
    },
    true,
);

const modules = import.meta.glob("/src/assets/mdx/**/*.mdx");

export const physics = new Registry({
    modules,
    source: "/src/assets/mdx/blogs/physics",
    mountOn: "/blogs/physics",
    records: {},
});

export const maths = new Registry({
    modules,
    source: "/src/assets/mdx/blogs/maths",
    mountOn: "/blogs/maths",
    records: {},
});

export const chemistry = new Registry({
    modules,
    source: "/src/assets/mdx/blogs/chemistry",
    mountOn: "/blogs/chemistry",
    records: {
        "/beckmann-rearrangement": "/BeckmannRearrangement.mdx",
    },
});

const general = new Registry({
    modules,
    source: "/src/assets/mdx/blogs/general",
    mountOn: "/blogs/general",
    records: {
        "/style-guide": "/style_guide.mdx",
    },
});

const blogs = new Registry({
    modules,
    source: "/src/assets/mdx/blogs",
    mountOn: "/blogs",
    records: {
        "/sample": "/sample1.mdx",
    },
});

export const registry = new CoalescedRegistry(blogs, chemistry, physics, maths, general);

export type RegistryType = typeof registry;
/**
 * Entries of the registry
 */
export const entries = Object.keys(registry.components) as [keyof RegistryType["components"]];
/**
 * Schema for validating entries of registry
 */
export const RegistryKeySchema = v.picklist(entries);

export default registry;
