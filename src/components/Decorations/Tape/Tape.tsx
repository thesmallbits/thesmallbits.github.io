import { cn, getIntBetween } from "@d1vij/shit-i-always-use";
import styles from "./tape.module.scss";

export const stickyNoteTapePlacements = {
    "": (
        <>
            <Tape
                className="absolute right-0 bottom-0 h-30 translate-x-1/3 translate-y-1/2"
                rotation={45}
            />
            <Tape className="absolute top-0 left-0 -mt-2 -mb-2 h-full -translate-x-1/2 scale-x-80" />
        </>
    ),
    "top-single": (
        <>
            <Tape
                className="absolute h-90 translate-x-30 -translate-y-39"
                rotation={89}
            />
        </>
    ),
    "tr-bl-opposites": (
        <>
            <Tape
                className="absolute bottom-0 left-0 h-40 translate-y-1/3"
                rotation={-44}
            />
            <Tape
                className="absolute top-0 right-0 h-43 -translate-y-1/3"
                rotation={-37}
            />
        </>
    ),
} as const;
export type TapePlacements = keyof typeof stickyNoteTapePlacements;

const placementKeys = Object.keys(stickyNoteTapePlacements) as TapePlacements[];
export function getRandomTapePlacement() {
    return stickyNoteTapePlacements[
        placementKeys[getIntBetween(0, placementKeys.length)]
    ];
}

type TapePlacementsProps = {
    varient: TapePlacements | "random";
};

export function TapePlacements({ varient }: TapePlacementsProps) {
    if (varient === "random") {
        return getRandomTapePlacement();
    } else {
        return stickyNoteTapePlacements[varient];
    }
}

export default function Tape({
    className,
    rotation = 0,
}: {
    className?: string;
    rotation?: number;
}) {
    return (
        <div
            className={cn(
                "relative flex w-10 flex-col shadow-black",
                className,
            )}
            style={{
                transform: `rotate(${rotation}deg)`,
            }}
        >
            <div className={cn(styles.tapeEdge, "aspect-square w-full")}></div>
            <div className={cn(styles.tapeBody, "grow")}></div>
            <div
                className={cn(
                    styles.tapeEdge,
                    "aspect-square w-full rotate-180",
                )}
            ></div>
        </div>
    );
}
