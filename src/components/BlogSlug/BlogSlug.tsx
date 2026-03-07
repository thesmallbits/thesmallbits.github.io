import { MDXFromComponent } from "@d1vij/jassm";
import { cn } from "@d1vij/shit-i-always-use";
import { useLoaderData } from "@tanstack/react-router";
import { Elements } from "@/content/registry";
import { stylemap } from "@/styles/mdx.stylesmap";
import styles from "./blogslug.module.css";

export default function BlogSlug() {
    const { component, metadata } = useLoaderData({ from: "/blogs/$" });

    return (
        <div className={cn("min-h-full w-dvw md:grid md:grid-cols-[auto_1fr]")}>
            {/*sidebar*/}
            <section className={cn("primary-border", "grow bg-light-secondary p-4", "w-full text-center md:block")}>
                <h1 className="">{metadata.author}</h1>
                <h1 className="">
                    Published: <br /> {metadata.created_at}
                </h1>
                <h1 className="">
                    Last Modified: <br /> {metadata.modified_at}
                </h1>
            </section>
            <div className={cn("p-2 font-serifed")}>
                <section
                    className={cn(styles.mdxContainer, "grid w-full grid-cols-1 p-2 md:w-[70%] lg:pt-10 lg:pl-30")}
                    lang="en"
                >
                    <MDXFromComponent
                        elements={Elements}
                        styles={stylemap}
                        source={component}
                        fallback={<div>Loading</div>}
                    />
                </section>
            </div>
        </div>
    );
}
