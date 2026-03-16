import { MDXFromComponent } from "@d1vij/jassm";
import { cn } from "@d1vij/shit-i-always-use";
import { useLoaderData } from "@tanstack/react-router";
import { Elements } from "@/content/MdxElements";
import { UNDEFINED_READING_TIME } from "@/schemas";
import { stylemap } from "@/styles/mdx.stylesmap";
import styles from "./blogslug.module.css";

type MetadataProps = {
    title: string;
    content: string;
};
function Metadata({ title, content }: MetadataProps) {
    return (
        <div className="">
            <h2 className="font-semibold text-lg md:text-xl">{title}</h2>
            <h3 className="text-light-text-secondary text-sm md:text-base">
                {content}
            </h3>
        </div>
    );
}

function Separator() {
    return (
        <div className="flex w-fit select-none items-center justify-center pt-1 text-center md:w-full">
            *
        </div>
    );
}
export default function BlogSlug() {
    const { component, metadata } = useLoaderData({ from: "/blogs/$" });

    const tagElms = metadata.tags.map((t) => (
        <p className="" key={t}>
            {t}
        </p>
    ));
    return (
        <div
            className={cn(
                "min-h-full w-dvw overflow-clip md:grid md:h-full md:grid-cols-[auto_1fr]",
            )}
        >
            {/*sidebar*/}
            <section
                className={cn(
                    "primary-border",
                    "grow bg-light-secondary p-4 pt-8",
                    "grid grid-cols-[auto_1fr_auto] items-center text-center md:block md:w-50 md:grid-cols-1 md:text-start",
                )}
            >
                <Separator />
                <div className="grid grid-cols-2 space-y-1 md:grid-cols-1">
                    <Metadata title="Author" content={metadata.author} />
                    <Metadata
                        title="Reading Time"
                        content={`${metadata.reading_minutes === UNDEFINED_READING_TIME ? "A few" : metadata.reading_minutes} minutes`}
                    />
                    <Metadata
                        title="Published"
                        content={metadata.created_at.toDateString()}
                    />
                    <Metadata
                        title="Modified"
                        content={metadata.modified_at.toDateString()}
                    />
                </div>
                <Separator />
                <Metadata title="Tags" content="" />
                <div>{tagElms}</div>
                <Separator />
            </section>
            {/*<Suspense fallback={BlogFallback}>*/}
            <div
                className={cn(
                    "overflow-x-hidden overflow-y-scroll p-2 font-serifed",
                    "relative",
                )}
            >
                <section
                    className={cn(
                        styles.mdxContainer,
                        "grid w-full grid-cols-1 p-2 md:w-[70%] lg:pt-10 lg:pl-30",
                    )}
                    lang="en"
                >
                    <MDXFromComponent
                        elements={Elements}
                        styles={stylemap}
                        source={component}
                        fallback={<BlogFallback />}
                    />
                </section>
            </div>
            {/*</Suspense>*/}
        </div>
    );
}

function BlogFallback() {
    return (
        <div className="place-center absolute inset-0 grid items-center font-semibold text-4xl decoration-0!">
            <p className="origin-center animate-spin text-center">↻</p>
        </div>
    );
}
