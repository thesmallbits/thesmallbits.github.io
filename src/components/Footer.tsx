import { cn, useVibrate } from "@d1vij/shit-i-always-use";
import { Link } from "@tanstack/react-router";

const commitLink = `https://github.com/thesmallbits/thesmallbits.github.io/tree/${__BUILD_HASH__}`;

export default function Footer() {
    const vibrator = useVibrate();
    return (
        <footer
            className={cn(
                "primary-border",
                "z-10 flex h-fit w-full justify-between text-center",
            )}
        >
            <Link
                to="/"
                onClick={() => vibrator(50)}
                className="primary-border cool-background-shit ml-2 border border-t-0 border-b-0 bg-light-secondary px-2 decoration-2 hover:underline"
            >
                Home
            </Link>
            <div className="flex items-center font-monospace">
                <span className="">
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
                <p>/</p>
                <a
                    href={commitLink}
                    rel="noopener"
                    title="View build commit"
                    target="_blank"
                    className="decoration-2 hover:underline"
                >
                    {__BUILD_HASH__}
                </a>
                <span className="mx-1 size-2 rounded bg-light-shade-green brightness-90"></span>
            </div>
        </footer>
    );
}
