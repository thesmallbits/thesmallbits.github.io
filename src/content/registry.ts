import { generateRegistry } from "@d1vij/jassm";
import z from "zod";

const modules = import.meta.glob("/src/assets/mdx/**/*.mdx");
const blogs = generateRegistry({
    modules,
    source: "/src/assets/mdx/blogs",
    mountOn: "/blogs",
    records: {
        "/sample1": "/sample1.mdx",
        "/blank": "/blank.mdx",
    },
});

export const registry = { ...blogs } as const;

export type RegistryType = typeof registry;
export const entries = Object.keys(registry) as [keyof RegistryType];
export const RegistryKeySchema = z.enum(entries);

export default registry;
