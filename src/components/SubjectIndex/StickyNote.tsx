/**
 * Soft Yellow	#F6E7A1
 * Dusty Rose	#E8B4B8
 * Muted Blue	#A7C7E7
 * Pale Mint	#BEE3DB
 * Warm Gray	#E5E5E5
 * Tape brown #895129
 */

import { useMemo } from "react";
import { getRandomTapePlacement } from "@/components/Decorations/Tape";
import { subjectPageIndex } from "@/content/Subjects";
import type { ValidSubject } from "@/schemas";

type StickyNoteProps = {
    subject: ValidSubject;
};

export default function StickyNote({ subject }: StickyNoteProps) {
    const meta = subjectPageIndex[subject];
    const TapePlacement = useMemo(getRandomTapePlacement, []);

    return (
        <div className="relative size-70 bg-[#F6E7A1]">
            {TapePlacement}
            {meta.title}
        </div>
    );
}
