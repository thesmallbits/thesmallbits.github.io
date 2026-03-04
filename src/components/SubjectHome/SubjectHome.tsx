import { Activity, cn } from "@d1vij/shit-i-always-use";
import { useLoaderData } from "@tanstack/react-router";
import { type HotLink, UNDEFINED } from "@/schemas/SubjectBlogPageSchema";
import styles from "./subjectHome.module.css";
export default function Subject() {
    const content = useLoaderData({
        from: "/blogs/$subject/",
    });

    const highlightedBlogElms = content.hot_links.map((l) => <HighlightedBlog {...l} key={l.url} />);
    return (
        <div>
            <h1 className={cn(styles.subjectTitle, "text-9xl")}>{content.title}</h1>

            {/*🤡 think of some better way than this*/}
            <Activity show={content.quote !== UNDEFINED.QUOTE}>
                <div className={cn("grid w-fit grid-rows-2", "font-cursive")}>
                    <h2>{content.quote}</h2>
                    <Activity show={content.quote_author !== UNDEFINED.QUOTE_AUTHOR}>
                        <h3 className={cn("place-self-end")}>~ {content.quote_author}</h3>
                    </Activity>
                </div>
            </Activity>

            <section>
                <h2>Highlighted Blogs</h2>
                <div>{highlightedBlogElms}</div>
            </section>
        </div>
    );
}

type HighlightedBlogProps = HotLink;
export function HighlightedBlog(props: HighlightedBlogProps) {
    return (
        <div className={cn("border border-light-border bg-light-secondary")}>
            <h3>{props.title}</h3>
            <p>{props.summary}</p>
            {/*<Activity show={props.reading_minutes !== UNDEFINED.READING_TIME}>*/}
            {/*FIXME: SHITIALWAYSUEISBROKENPLSSEE*/}
            <Activity show={true}>
                <p>hi</p>
            </Activity>
        </div>
    );
}
