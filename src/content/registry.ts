import { generateRegistry } from "@d1vij/jassm";
// holy fuck
// using "import z from "zod"" increases the bundle size by +200KB 💀
import { z } from "zod/v4/mini";

const modules = import.meta.glob("/src/assets/mdx/**/*.mdx");
const blogs = generateRegistry({
    modules,
    source: "/src/assets/mdx/blogs",
    mountOn: "/blogs",
    records: {
        "/the-beckman-rearrangement": "/Beckmann.mdx",
    },
});

export const registry = { ...blogs } as const;

export type RegistryType = typeof registry;
export const entries = Object.keys(registry) as [keyof RegistryType];
export const RegistryKeySchema = z.enum(entries);

export default registry;
