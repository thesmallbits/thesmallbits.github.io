/**
 * Soft Yellow	#F6E7A1
 * Dusty Rose	#E8B4B8
 * Muted Blue	#A7C7E7
 * Pale Mint	#BEE3DB
 * Warm Gray	#E5E5E5
 * Tape brown #895129
 */

import { cn, getIntBetween } from "@d1vij/shit-i-always-use";

import { useMemo } from "react";
import { getRandomTapePlacement } from "@/components/Decorations/Tape";
import { subjectPageIndex } from "@/content/Subjects";
import type { ValidSubject } from "@/schemas";
import type { colorVarients } from "./SubjectIndex";
import styles from "./stickynote.module.scss";

type StickyNoteProps = {
    subject: ValidSubject;
    varient: (typeof colorVarients)[number];
};

export default function StickyNote({ subject, varient }: StickyNoteProps) {
    const meta = subjectPageIndex[subject];
    const TapePlacement = useMemo(getRandomTapePlacement, []);

    return (
        <div
            className={cn(
                styles[varient],
                styles.stickyNote,
                "relative size-70",
            )}
            style={{
                transform: `rotate(${getIntBetween(-5, 5)}deg)`,
            }}
        >
            <div className={styles.background}></div>
            {TapePlacement}
            {meta.title}
        </div>
    );
}
