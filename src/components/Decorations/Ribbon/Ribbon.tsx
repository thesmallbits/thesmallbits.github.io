import { cn } from "@d1vij/shit-i-always-use";
import styles from "./ribbon.module.css";

type RibbonProps = {
    className?: string;
    ribbonColor?: string;
};

export default function Ribbon({ className, ribbonColor }: RibbonProps) {
    return (
        <div className={cn("relative h-[90%] w-10 shadow-xl", className)}>
            <div
                className="absolute inset-0 -mt-5 size-full"
                style={
                    {
                        backgroundColor: ribbonColor || "var(--color-light-shade-red)",
                        "--ribbon-color": ribbonColor,
                    } as React.CSSProperties
                }
            >
                <div className="mx-auto mt-1 size-3 rounded-3xl bg-light-text-bg"></div>
            </div>
            <div
                className={cn(styles.ribbon, "absolute bottom-0 left-0 aspect-square w-full translate-y-2")}
                style={
                    {
                        backgroundColor: ribbonColor || "var(--color-light-shade-red)",
                        "--ribbon-color": ribbonColor,
                    } as React.CSSProperties
                }
            ></div>
        </div>
    );
}
