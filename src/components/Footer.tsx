import { cn } from "@d1vij/shit-i-always-use";
export default function Footer() {
    return (
        <footer
            className={cn("primary-border", "z-10 h-fit w-full text-center")}
        >
            <a
                href="https://github.com/thesmallbits"
                target="_blank"
                rel="noopener"
                className="cursor-pointer"
            >
                Source
            </a>
        </footer>
    );
}
