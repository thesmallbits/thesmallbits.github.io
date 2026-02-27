import { Registry, CoalescedRegistry } from "@d1vij/jassm";
// holy fuck
// using "import z from "zod"" increases the bundle size by +200KB 💀
import { z } from "zod/mini";

const modules = import.meta.glob("/src/assets/mdx/**/*.mdx");

export const physics = new Registry({
    modules,
    source: "/src/assets/mdx/blogs/physics",
    mountOn: "/blogs/physics",
    records: {
        "/the-beckman-rearrangement": "/BeckmanRearrangement.mdx",
    },
});

export const maths = new Registry({
    modules,
    source: "/src/assets/mdx/blogs/maths",
    mountOn: "/blogs/maths",
    records: {
        "/the-beckman-rearrangement": "/BeckmanRearrangement.mdx",
    },
});

export const chemistry = new Registry({
    modules,
    source: "/src/assets/mdx/blogs/chemistry",
    mountOn: "/blogs/chemistry",
    records: {
        "/the-beckman-rearrangement": "/BeckmanRearrangement.mdx",
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

// TODO: find some better approach
export const registry = new CoalescedRegistry(blogs, chemistry, physics, maths, general);

export type RegistryType = typeof registry;
export const entries = Object.keys(registry.components) as [keyof RegistryType["components"]];
export const RegistryKeySchema = z.enum(entries);

export default registry;
