import { Activity, cn, useVibrate } from "@d1vij/shit-i-always-use";
import { Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useMemo } from "react";
import type { groupMetadataAlphabetically } from "@/lib";
import styles from "./subjectHome.module.css";

type AllBlogsProps = {
    groups: ReturnType<typeof groupMetadataAlphabetically>;
};

export default function AllBlogs({ groups }: AllBlogsProps) {
    // <ul className="list-inside list-['⤏']">{blogElms}</ul>

    const vibrator = useVibrate();
    const letters = useMemo(() => {
        return Object.keys(groups).sort();
    }, [groups]);

    const handleLetterLinkClick = useCallback(() => vibrator(50), [vibrator]);
    const letterLinks = useMemo(() => {
        const elms = [];
        for (const letter of letters) {
            elms.push(
                <Link
                    to="."
                    onClick={handleLetterLinkClick}
                    hash={letter}
                    className="border border-light-border bg-light-secondary p-1 px-3 transition-all duration-200 hover:shadow-xs active:scale-95 active:shadow-sm"
                >
                    {letter}
                </Link>,
            );
        }
        return elms;
    }, [letters, handleLetterLinkClick]);

    const letterSections = useMemo(() => {
        return letters.map((l) => (
            <LetterSection letter={l} blogs={groups[l]} key={l} />
        ));
    }, [letters.map, groups]);
    return (
        <section className="">
            <div className="flex flex-wrap gap-1">{letterLinks}</div>
            <ul className="mt-3 grid gap-4 md:grid-cols-2">{letterSections}</ul>
        </section>
    );
}

type LetterSectionProps = {
    letter: string;
    blogs: AllBlogsProps["groups"][string];
};
function LetterSection({ letter, blogs }: LetterSectionProps) {
    const elms = blogs.map((b) => (
        <BlogLink splat={b.__splat} key={b.__splat} />
    ));

    return (
        <li className={cn(styles.letterSection, "relative mt-1")}>
            <div className="relative w-fit">
                <div className="-translate-0.5 absolute top-1/2 size-2 rounded-4xl bg-light-border"></div>
                <h3 id={letter} className={cn(styles.letter, "w-fit text-2xl")}>
                    {letter}
                </h3>
            </div>
            <div className={styles.line}></div>
            <ul className={cn("space-y-2")}>
                {elms}
                {elms}
                {elms}
            </ul>
        </li>
    );
}

import blogRegistry from "@/content/BlogRegistry";
import type { UserDefinedMetadata } from "@/schemas";

function BlogLink({ splat }: { splat: string }) {
    const vibrator = useVibrate();
    const navigate = useNavigate();
    const handleClick = useCallback(() => {
        vibrator(50);
        navigate({
            to: "/blogs/$",
            params: { _splat: splat },
            resetScroll: true,
        });
    }, [vibrator, splat, navigate]);
    const meta = blogRegistry.getMetadata<UserDefinedMetadata>(splat);

    return (
        <li className={cn(styles.list, "grid grid-cols-[auto_1fr]")}>
            <div
                className={cn(
                    styles.thelittledash,
                    "place-self-center",
                    // change width to change the length of dash and height to change the thickness
                    "h-0.5 w-3 rounded-r-4xl bg-light-border",
                )}
            ></div>

            <button
                type="button"
                onClick={handleClick}
                className={cn(
                    styles.blogLink,
                    "block cursor-pointer p-1 px-2 text-start outline-2 outline-light-border transition-shadow duration-300 hover:shadow hover:outline-2 active:outline-2",
                    // "shadow-light-text-primary/60 shadow-xs",
                    "bg-light-secondary",
                )}
            >
                <h4>{meta.title}</h4>

                <div
                    className={cn(
                        "flex flex-wrap space-x-1 border-light-border border-t pt-1 text-light-text-tertiary text-sm",
                    )}
                >
                    <p className="w-fit border-light-border border-r pr-1">
                        {meta.author}
                    </p>
                    <p className="w-fit border-light-border border-r pr-1">
                        {meta.modified_at.toDateString()}
                    </p>
                    <Activity mode={Boolean(meta.reading_minutes)}>
                        <p className="w-fit">{meta.reading_minutes} mins</p>
                    </Activity>
                </div>
            </button>
        </li>
    );
}
