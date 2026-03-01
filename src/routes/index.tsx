import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
// import { lazy } from "react";

export const Route = createFileRoute("/")({
    component: RouteComponent,
    head: () => ({
        meta: [{ title: "thesmallbits" }],
    }),
});

// const _Hero = lazy(() => import("@/components/Hero"));
// const _HomeCards = lazy(() => import("@/components/HomeCards"));

export default function RouteComponent() {
    return (
        <div className="flex min-h-screen flex-col bg-linear-to-b from-white to-gray-50 font-sans text-black">
            {/* Hero Section */}
            <main className="flex flex-1 items-center justify-center px-6 pt-28 md:pt-36">
                <div className="max-w-4xl text-center">
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="font-semibold text-5xl leading-[1.05] tracking-tight md:text-7xl"
                    >
                        Science <span className="text-gray-400">Beyond</span> Textbooks
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mx-auto mt-8 max-w-2xl text-gray-500 text-lg leading-relaxed md:text-xl"
                    >
                        Smallbits provides its users the perfect learning space for the learners of science and
                        providing an interactive test environment to analyze, learn and improve.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-12 flex justify-center gap-6"
                    >
                        <button
                            type="button"
                            onClick={() => {
                                const section = document.getElementById("recent");
                                section?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="rounded-xl bg-black px-7 py-3 text-white transition hover:bg-gray-800"
                        >
                            Explore Writing
                        </button>

                        <button
                            type="button"
                            className="rounded-xl border border-black px-7 py-3 transition hover:bg-black hover:text-white"
                        >
                            Generate from PDF
                        </button>
                    </motion.div>
                </div>
            </main>

            {/* About Section */}
            <section className="border-gray-200 border-t px-6 py-28">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-semibold text-3xl tracking-tight md:text-4xl">About</h2>

                    <p className="mt-8 text-gray-600 text-lg leading-relaxed">lorem ipsum is love</p>

                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">fuck divij made by identiy public</p>
                </div>
            </section>

            {/* Recent Writing Section */}
            <section id="recent" className="scroll-mt-28 border-gray-200 border-t px-6 py-28">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-center font-semibold text-3xl tracking-tight md:text-4xl">Recent Writing</h2>

                    <div className="mt-16 space-y-14">
                        <article className="group cursor-pointer">
                            <h3 className="font-medium text-2xl underline-offset-4 group-hover:underline">
                                Rethinking Quantum Entanglement
                            </h3>
                            <p className="mt-3 text-gray-600 leading-relaxed">
                                A conceptual look at non-locality and what it means for our understanding of physical
                                reality.
                            </p>
                            <p className="mt-2 text-gray-400 text-sm">8 min read · Physics</p>
                        </article>

                        <article className="group cursor-pointer">
                            <h3 className="font-medium text-2xl underline-offset-4 group-hover:underline">
                                Rethinking Quantum Entanglement
                            </h3>
                            <p className="mt-3 text-gray-600 leading-relaxed">
                                A conceptual look at non-locality and what it means for our understanding of physical
                                reality.
                            </p>
                            <p className="mt-2 text-gray-400 text-sm">8 min read · Physics</p>
                        </article>

                        <article className="group cursor-pointer">
                            <h3 className="font-medium text-2xl underline-offset-4 group-hover:underline">
                                Rethinking Quantum Entanglement
                            </h3>
                            <p className="mt-3 text-gray-600 leading-relaxed">
                                A conceptual look at non-locality and what it means for our understanding of physical
                                reality.
                            </p>
                            <p className="mt-2 text-gray-400 text-sm">8 min read · Physics</p>
                        </article>
                    </div>

                    <div className="mt-16 text-center">
                        <button
                            type="button"
                            className="text-black underline underline-offset-4 transition hover:opacity-70"
                        >
                            View All Posts
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-gray-200 border-t py-10 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} thesmallbits
            </footer>
        </div>
    );
}
