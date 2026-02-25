import { stylemap } from "@/styles/mdx.stylesmap";
import { MDXFromComponent } from "@d1vij/jassm";
import { cn } from "@d1vij/shit-i-always-use";
import { useLoaderData } from "@tanstack/react-router";

export default function BlogSlug() {
    const Component = useLoaderData({ from: "/blogs/$blog" });
    return (
        <div className={cn("flex")}>
            {/*sidebar*/}
            <section
                className={cn(
                    "primary-border",
                    "grow bg-light-secondary p-4",
                    "hidden md:block",
                )}
            >
                aasdasdas
            </section>
            <section
                className={cn(
                    "w-full overflow-scroll p-4 pl-8 font-[2px] font-serifed",
                )}
            >
                <MDXFromComponent
                    styles={stylemap}
                    SourceComponent={Component}
                    fallback={<div>Loading</div>}
                />
            </section>
        </div>
    );
}
