// TODO: pls style me
import { Activity, cn } from "@d1vij/shit-i-always-use";
import { useLoaderData } from "@tanstack/react-router";
import { UNDEFINED_QUOTE, UNDEFINED_QUOTE_AUTHOR } from "@/schemas";
import AllBlogs from "./AllBlogs";
import { HighlightedBlog } from "./HighlightedBlog";
import styles from "./subjectHome.module.css";

export default function Subject() {
    const { content, groups } = useLoaderData({
        from: "/$subject",
    });

    const highlightedBlogElms = content.highlights.map((l) => <HighlightedBlog key={l} splat={l} />);

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-[url(/j.png)] bg-ontain bg-size-[400px] bg-repeat opacity-10"></div>
            <div className="relative z-20 border-light-border border-b-2 bg-light-secondary pb-10">
                {/*<div className="bg-repeat bg-[url(/j.png)] bg-size-[400px] opacity-70 from-0"></div>*/}
                {/*<img className="object-cover absolute inset-0 bg-repeat size-full" src="/i.png" alt="" />*/}

                {/*<div className="opacity-70 absolute inset-0 bg-repeat bg-[url(/j.png)] bg-ontain bg-size-[400px]"></div>*/}
                {/*<div className="h-20 blur-xl w-full bg-red-300/70"></div>*/}
                <h1
                    className={cn(
                        styles.subjectTitle,
                        "text-center text-[clamp(3rem,10vw,30rem)] text-shadow-2xs text-shadow-light-border tracking-wide md:text-shadow-sm",
                        "relative z-10 size-full font-bold text-light-text-secondary uppercase",
                        "backdrop-blur-xs backdrop-opacity-50",
                    )}
                >
                    {content.title}
                </h1>
            </div>
            <div className="relative z-20 mx-auto w-[90%] p-4 md:w-[80%]">
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
                        <h2 className="mb-2 font-semibold text-4xl underline decoration-3 decoration-dotted">
                            Highlights
                        </h2>
                        <div className={cn("grid grid-cols-1 gap-2 md:grid-cols-2")}>{highlightedBlogElms}</div>
                    </section>

                    <section className="mt-6">
                        <h2 className="mb-2 font-semibold text-4xl underline decoration-3 decoration-dotted">
                            All Blogs
                        </h2>
                        <AllBlogs groups={groups} />
                    </section>
                </div>
            </div>
        </div>
    );
}
