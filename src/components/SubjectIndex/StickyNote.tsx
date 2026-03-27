/**
 * Soft Yellow	#F6E7A1
 * Dusty Rose	#E8B4B8
 * Muted Blue	#A7C7E7
 * Pale Mint	#BEE3DB
 * Warm Gray	#E5E5E5
 * Tape brown #895129
 */

import { cn } from "@d1vij/shit-i-always-use";
import { random } from "radashi";
import { TapePlacements } from "@/components/Decorations/Tape";
import { subjectPageIndex } from "@/content/Subjects";
import type { ValidSubject } from "@/schemas";
import type { colorVarients } from "./SubjectIndex";
import styles from "./stickynote.module.scss";

type StickyNoteProps = {
    subject: ValidSubject;
    color: (typeof colorVarients)[number];
    tape: TapePlacements | "random";
};

export default function StickyNote({ subject, color, tape }: StickyNoteProps) {
    const meta = subjectPageIndex[subject];

    return (
        <div
            className={cn(styles[color], styles.stickyNote, "relative size-70")}
            style={{
                transform: `rotate(${random(-5, 5)}deg)`,
            }}
        >
            <div className={styles.background}></div>
            <TapePlacements varient={tape} />
            {meta.title}
        </div>
    );
}
