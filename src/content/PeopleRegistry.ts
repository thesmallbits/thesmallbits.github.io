import { Registry } from "@d1vij/jassm";

const peopleRegistry = new Registry({
    modulesGlob: import.meta.glob("/src/assets/mdx/people/**/*.mdx"),
    metadataGlob: import.meta.glob("/src/assets/mdx/people/**/*.meta.ts", {
        eager: true,
        import: "meta",
    }),
    root: "/src/assets/mdx/people",
    virtual: "",
});

console.log(peopleRegistry.keys);
