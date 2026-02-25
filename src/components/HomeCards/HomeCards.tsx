import { cn } from "@d1vij/shit-i-always-use";
import styles from "./cards.module.css";

type HomeCardsProps = {
    title: string;
    content: string;
};
export default function HomeCards({ title, content }: HomeCardsProps) {
    return (
        <div
            className={cn(
                styles.cards,
                "rounded-xl p-4 leading-normal transition-all duration-200 ease-out",
                "border border-transparent hover:border-light-border hover:shadow-xs active:border-light-border active:shadow",
            )}
        >
            <h2 className="trackin font-semibold text-3xl">{title}</h2>
            <p className="mt-1">{content}</p>
        </div>
    );
}
