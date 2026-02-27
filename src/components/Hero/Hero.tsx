import { cn } from "@d1vij/shit-i-always-use";
import styles from "./hero.module.css";
export default function Hero() {
    return (
        <section
            className={cn(
                styles.hero,
                "mt- cool-background-shit -m-3 aspect-auto h-[45dvh] bg-light-secondary md:h-[70dvh]",
            )}
        >
            <div
                className={cn(
                    "mx-auto h-full w-[84%] border-light-border border-x bg-light-secondary md:w-[80%]",
                    // "flex flex-col justify-center items-center text-center",
                    "grid grid-rows-[1fr_auto] items-center align-middle",
                )}
            >
                <span className="grid grid-rows-[1fr_auto] pt-8 text-center">
                    <h1
                        className={cn(
                            styles.title,
                            "font-semibold text-6xl text-light-text-secondary tracking-wide md:text-9xl lg:text-[9em]",
                        )}
                    >
                        The Small Bits
                    </h1>
                    <span className="mt-3 font-semibold text-light-shade-red text-light-text-tertiar text-sm opacity-80 md:ml-[50%] md:text-3xl lg:text-4xl">
                        /ðəˈsmɔlˌbɪts/
                    </span>
                </span>
                <span
                    className={cn(
                        styles.butt,
                        "mt-4 mb-10 px-8 text-center font-extralight text-lg text-light-text-primary md:mb-30 md:text-3xl lg:text-5xl",
                    )}
                >
                    Providing the small bits of education, for your bigger self.
                </span>
            </div>
        </section>
    );
}
