import { MDXFromComponent } from "@d1vij/jassm";
import { cn } from "@d1vij/shit-i-always-use";
import { useLoaderData } from "@tanstack/react-router";
import { use, useMemo } from "react";
import * as v from "valibot";
import { Elements } from "@/content/registry";
import { BlogExportSchema } from "@/schemas";
import { stylemap } from "@/styles/mdx.stylesmap";
import styles from "./blogslug.module.css";

export default function BlogSlug() {
    const { Component, exportPromise } = useLoaderData({ from: "/blogs/$subject/$blog" });
    const { meta } = useMemo(() => {
        const exports = use(exportPromise);
        console.log(exports);
        const results = v.safeParse(BlogExportSchema, exports);
        if (!results.success) {
            throw results;
        }
        return results.output;
    }, [exportPromise]);

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
                <section
                    className={cn(styles.mdxContainer, "grid w-full grid-cols-1 p-2 md:w-[80%] lg:pt-10 lg:pl-20")}
                    lang="en"
                >
                    <MDXFromComponent
                        elements={Elements}
                        styles={stylemap}
                        source={Component}
                        fallback={<div>Loading</div>}
                    />
                </section>
            </div>
        </div>
    );
}
