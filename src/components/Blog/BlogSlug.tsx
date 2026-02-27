import { MDXFromComponent } from "@d1vij/jassm";
import { cn } from "@d1vij/shit-i-always-use";
import { useLoaderData } from "@tanstack/react-router";
import { use, useMemo } from "react";
import { z } from "zod/mini";
import { type entries, registry } from "@/content/registry";
import { stylemap } from "@/styles/mdx.stylesmap";
import styles from "./blogslug.module.css";

const DateStringSchema = z.string().check(z.regex(/^\d{2}-\d{2}-\d{4}$/));

const MetaSchema = z.object({
    author: z.string(),
    created_at: DateStringSchema,
    modified_at: DateStringSchema,
    tags: z.array(z.string()),
});

const ExportSchema = z.object({
    meta: MetaSchema,
});

export default function BlogSlug() {
    const { path, Component } = useLoaderData({ from: "/blogs/$subject/$blog" });
    const { meta } = useMemo(() => {
        const exports = use(registry.getExport(path as (typeof entries)[number]));
        const results = ExportSchema.safeParse(exports);
        if (!results.success) {
            throw results.error;
        }
        return results.data;
    }, [path]);

    return (
        <div className={cn("min-h-full w-dvw md:grid md:grid-cols-[auto_1fr]")}>
            {/*sidebar*/}
            <section className={cn("primary-border", "grow bg-light-secondary p-4", "w-full text-center md:block")}>
                <h1 className="">{meta.author}</h1>
                <h1 className="">
                    Published: <br /> {meta.created_at}
                </h1>
                <h1 className="">
                    Last Modified: <br /> {meta.modified_at}
                </h1>
            </section>
            <div className={cn("p-2 font-serifed")}>
                <section className={cn(styles.mdxContainer, "w-full p-2 md:w-[80%] lg:pt-10 lg:pl-20")} lang="en">
                    <MDXFromComponent styles={stylemap} SourceComponent={Component} fallback={<div>Loading</div>} />
                </section>
            </div>
        </div>
    );
}
