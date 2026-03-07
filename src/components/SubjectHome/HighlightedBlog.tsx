import { Activity, cn } from "@d1vij/shit-i-always-use";
import { Link } from "@tanstack/react-router";
import { Hourglass } from "lucide-react";
import { type HotLink, UNDEFINED } from "@/schemas/SubjectBlogPageSchema";

type HighlightedBlogProps = HotLink;
export function HighlightedBlog(props: HighlightedBlogProps) {
    return (
        <div
            className={cn(
                "border border-light-border bg-light-secondary",
                "p-2",
                "grid grid-rows-[auto_1fr_auto]",
                "shadow-light-tertiary transition-shadow-xs duration-400 ease-out hover:shadow-xs",
            )}
        >
            <h3 className="font-bold text-3xl text-light-text-secondary">{props.title}</h3>
            <p className="p-2 text-light-text-tertiary text-sm md:text-base">{props.summary}</p>
            <div className={cn("w-full border-light-border border-t pt-2", "flex gap-1")}>
                <Activity show={props.reading_minutes !== UNDEFINED.READING_TIME}>
                    <div
                        className={cn(
                            "cool-something-button-like",
                            "flex w-fit items-center justify-center text-center",
                        )}
                    >
                        <Hourglass className="size-4 stroke-light-text-secondary" />
                        <p>{props.reading_minutes} mins</p>
                    </div>
                </Activity>
                <Link
                    to={"/blogs/$"}
                    params={{
                        _splat: props.splat,
                    }}
                    className={cn("cool-something-button-like", "ml-auto")}
                >
                    Read
                </Link>
            </div>
        </div>
    );
}
