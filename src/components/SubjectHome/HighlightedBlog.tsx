import { Activity, cn } from "@d1vij/shit-i-always-use";
import { Link } from "@tanstack/react-router";
import { Hourglass } from "lucide-react";
import { useMemo } from "react";
import * as v from "valibot";
import Ribbon from "@/components/Decorations/Ribbon";
import { type BlogRegistryKey, blogRegistry } from "@/content/BlogRegistry";
import { RegistryMetadataSchema, UNDEFINED_READING_TIME } from "@/schemas";

type HighlightedBlogProps = {
    splat: BlogRegistryKey;
};
export function HighlightedBlog(props: HighlightedBlogProps) {
    const meta = useMemo(() => {
        return v.parse(
            RegistryMetadataSchema,
            blogRegistry.getMetadata(props.splat),
        );
    }, [props.splat]);
    return (
        <div
            className={cn(
                "border-2 border-light-border bg-light-secondary",
                "relative p-2",
                "hover:shadow-2xs",
                "group row-span-3 grid grid-rows-subgrid overflow-clip",
                // "transition-shadow-xs duration-400 ease-out hover:shadow-2xs",
            )}
        >
            <Ribbon className="absolute top-0 right-2 h-10 -translate-y-12 transition-all duration-250 ease-out group-hover:translate-y-0 group-active:translate-y-0" />
            <h3 className="aspect-auto h-fit max-h-full font-bold text-3xl text-light-text-secondary">
                {meta.title}
            </h3>
            <p className="p-2 text-light-text-tertiary text-sm md:text-base">
                {meta.summary}
            </p>
            <div
                className={cn(
                    "",
                    "w-full border-light-border border-t pt-2",
                    "flex gap-1",
                )}
            >
                <Activity
                    show={meta.reading_minutes !== UNDEFINED_READING_TIME}
                >
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
