import { cn, getIntBetween } from "@d1vij/shit-i-always-use";
import styles from "./tape.module.scss";

const tapePlacements = [
    <>
        <Tape className="absolute right-0 bottom-0 h-30 translate-x-1/3 translate-y-1/2" rotation={45} />
        <Tape className="absolute top-0 left-0 -mt-2 -mb-2 h-full -translate-x-1/2 scale-x-80" />
    </>,
];
export function getRandomTapePlacement() {
    return tapePlacements[getIntBetween(0, tapePlacements.length)];
}

export default function Tape({ className, rotation = 0 }: { className?: string; rotation?: number }) {
    return (
        <div
            className={cn("relative flex h-full w-10 flex-col shadow-black", className)}
            style={{
                transform: `rotate(${rotation}deg)`,
            }}
        >
            <div className={cn(styles.tapeEdge, "aspect-square w-full")}></div>
            <div className={cn(styles.tapeBody, "grow")}></div>
            <div className={cn(styles.tapeEdge, "aspect-square w-full rotate-180")}></div>
        </div>
    );
}
