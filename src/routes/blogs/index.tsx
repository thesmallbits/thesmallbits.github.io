import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";

const Blog = lazy(() => import("@/components/Blog"));
export const Route = createFileRoute("/blogs/")({
    component: Blog,
});
