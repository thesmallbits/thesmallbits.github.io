// TODO: check if lodash is actuallly being treeshaken or not
import { shuffle } from "radashi";
import { ValidSubjects } from "@/schemas";
import StickyNote from "./StickyNote";

export const colorVarients = [
    "yellow",
    "rose",
    "blue",
    "mint",
    "gray",
] as const;

export default function SubjectIndex() {
    const colors = shuffle(colorVarients);
    const notes = [];
    for (let idx = 0; idx < ValidSubjects.length; idx++) {
        notes.push(
            <StickyNote
                key={idx}
                subject={ValidSubjects[idx]}
                varient={colors[idx % colors.length]}
            />,
        );
    }
    return (
        <div className="grid grid-cols-2 gap-10 overflow-x-clip p-8">
            {notes}
        </div>
    );
}
