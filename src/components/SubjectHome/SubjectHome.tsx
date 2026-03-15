import { Activity, cn } from "@d1vij/shit-i-always-use";
import { Link, useLoaderData } from "@tanstack/react-router";
import Ribbon from "@/components/Ribbon";
import { UNDEFINED_QUOTE, UNDEFINED_QUOTE_AUTHOR } from "@/schemas";
import AllBlogs from "./AllBlogs";
import { HighlightedBlog } from "./HighlightedBlog";
import styles from "./subjectHome.module.css";

export default function Subject() {
    const { content, groups } = useLoaderData({
        from: "/$subject",
    });

    const highlightedBlogElms = content.highlights.map((l) => <HighlightedBlog key={l} splat={l} />);
    const hasBlogs = Object.keys(groups).length !== 0;

    const BlogSection = (
        <div className="relative z-20 mx-auto w-[90%] p-4">
            {/*🤡 think of some better way than this*/}
            <Activity show={content.quote !== UNDEFINED_QUOTE}>
                <section className={cn("ml-auto", "font-cursive", "mt-2 mb-4", "text-sm md:text-2xl")}>
                    <div className="ml-auto w-fit">
                        <h2>{content.quote}</h2>
                        <Activity show={content.quote_author !== UNDEFINED_QUOTE_AUTHOR}>
                            <h3 className="text-end">~ {content.quote_author}</h3>
                        </Activity>
                    </div>
                </section>
            </Activity>

            <div className="mx-auto md:w-[80%]">
                <section className="mt-4">
                    <h2 className="mb-4 font-semibold text-4xl underline decoration-3 decoration-dotted">Highlights</h2>
                    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2")}>{highlightedBlogElms}</div>
                </section>

                <section className="mt-8">
                    <h2 className="mb-4 font-semibold text-4xl underline decoration-3 decoration-dotted">All Blogs</h2>
                    <AllBlogs groups={groups} />
                </section>
            </div>
        </div>
    );

    const EmptySection = (
        <div className="relative grid size-full place-content-center">
            <div className="space-y-1 rounded border-2 border-light-border p-2 text-center backdrop-blur-[1px]">
                <p className="text-2xl">No blogs have been written for this subject yet.</p>
                <p className="border-light-border border-t">
                    <span className="mr-1 text-light-text-secondary italic">Psstt...</span>
                    Interested in contributing here?? Maybe
                    <Link
                        to="/join-us"
                        className="mx-1 underline decoration-2 decoration-dotted hover:decoration-solid"
                    >
                        join us
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
    return (
        <div className="relative grid min-h-full grid-rows-[auto_1fr]">
            <div
                className={`absolute inset-0 bg-size-[400px] opacity-10`}
                style={{
                    background: `url(${content.background_image})`,
                }}
            ></div>
            <div className="relative z-20 border-light-border border-b-2 bg-light-secondary pb-10">
                <h1
                    className={cn(
                        styles.subjectTitle,
                        "relative z-10 text-light-text-secondary uppercase",
                        "text-center font-bold text-[clamp(3rem,12vw,30rem)]",
                        "text-shadow-2xs text-shadow-light-border tracking-wide md:text-shadow-sm",
                    )}
                >
                    {content.title}
                </h1>
                <Ribbon className="absolute top-0 right-4" />
            </div>
            {hasBlogs ? BlogSection : EmptySection}
        </div>
    );
}
