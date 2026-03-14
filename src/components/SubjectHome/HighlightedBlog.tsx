import { Activity, cn } from "@d1vij/shit-i-always-use";
import { Link } from "@tanstack/react-router";
import { Hourglass } from "lucide-react";
import { useMemo } from "react";
import * as v from "valibot";
import { type BlogRegistryKey, blogRegistry } from "@/content/BlogRegistry";
import { RegistryMetadataSchema, UNDEFINED_READING_TIME } from "@/schemas";

type HighlightedBlogProps = {
    splat: BlogRegistryKey;
};
export function HighlightedBlog(props: HighlightedBlogProps) {
    const meta = useMemo(() => {
        return v.parse(RegistryMetadataSchema, blogRegistry.getMetadata(props.splat));
    }, [props.splat]);
    return (
        <div
            className={cn(
                "border border-light-border bg-light-secondary",
                "p-2",
                "shadow-lg",
                "row-span-3 grid grid-rows-subgrid",
                // "transition-shadow-xs duration-400 ease-out hover:shadow-2xs",
            )}
        >
            <h3 className="aspect-auto h-fit max-h-full font-bold text-3xl text-light-text-secondary">{meta.title}</h3>
            <p className="p-2 text-light-text-tertiary text-sm md:text-base">{meta.summary}</p>
            <div className={cn("", "w-full border-light-border border-t pt-2", "flex gap-1")}>
                <Activity show={meta.reading_minutes !== UNDEFINED_READING_TIME}>
                    <div
                        className={cn(
                            "cool-something-button-like",
                            "flex w-fit items-center justify-center text-center",
                        )}
                    >
                        <Hourglass className="size-4 stroke-light-text-secondary" />
                        <p>{meta.reading_minutes} mins</p>
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
