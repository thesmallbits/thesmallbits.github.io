import { cn, useVibrate } from "@d1vij/shit-i-always-use";
import { Link } from "@tanstack/react-router";
export default function Footer() {
    const vibrator = useVibrate();
    return (
        <footer
            className={cn(
                "primary-border",
                "z-10 flex h-fit w-full justify-between px-4 text-center",
            )}
        >
            <Link
                to="/"
                onClick={() => vibrator(50)}
                className="primary-border cool-background-shit border border-t-0 border-b-0 bg-light-secondary px-2 decoration-2 hover:underline"
            >
                Home
            </Link>
            <span>
                @
                <a
                    href="https://github.com/thesmallbits"
                    target="_blank"
                    rel="noopener"
                    className="cursor-pointer underline decoration-2 decoration-dotted hover:decoration-solid"
                    onClick={() => vibrator(50)}
                >
                    thesmallbits
                </a>
            </span>
        </footer>
    );
}
