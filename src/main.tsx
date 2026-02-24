import "@/tailwind.css";
import "@/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createHashHistory,
    createRouter,
    RouterProvider,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import config from "../config";

const router = createRouter({
    routeTree,
    scrollRestoration: true,
    history: config.HISTORY_TYPE === "hash" ? createHashHistory() : undefined,
});

// biome-ignore lint/style/noNonNullAssertion: trust me bro
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
