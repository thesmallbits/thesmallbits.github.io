import { cn } from "@d1vij/shit-i-always-use";
import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import ConsoleEgg from "@/components/ConsoleEgg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <HeadContent />
            <div
                className={cn("h-dvh w-dvw", "grid grid-rows-[auto_1fr_auto]")}
            >
                <Header />
                <section className={cn("relative z-20 overflow-scroll")}>
                    <Outlet />
                </section>
                <Footer />
            </div>

            {/* Non important shit */}
            <ConsoleEgg />
        </>
    );
}
