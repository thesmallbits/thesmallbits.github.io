import { MDXFromComponent } from "@d1vij/jassm";
import { cn } from "@d1vij/shit-i-always-use";
import { useLoaderData, useParams } from "@tanstack/react-router";
import { use, useMemo } from "react";
import { z } from "zod/mini";
import { chemistry, entries, registry } from "@/content/registry";
import { stylemap } from "@/styles/mdx.stylesmap";
import styles from "./blogslug.module.css";

type ExportType = {
    meta: {
        author: string;
    };
};

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
        const exports = use(registry.getExport(path as typeof entries[number]));
        const results = ExportSchema.safeParse(exports);
        if (!results.success) {
            throw results.error;
        }
        return results.data;
    }, [path]);

    return (
        <div className={cn("md:grid w-dvw md:grid-cols-[auto_1fr] min-h-full")}>
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
            <div className={cn("font-serifed p-2 ")}>
                <section className={cn(styles.mdxContainer, "w-full p-2 md:w-[80%] lg:pt-10 lg:pl-20")} lang="en">
                    <MDXFromComponent styles={stylemap} SourceComponent={Component} fallback={<div>Loading</div>} />
                </section>
            </div>
        </div>
    );
}
