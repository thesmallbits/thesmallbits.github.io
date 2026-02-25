import { lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";

const Blog = lazy(() => import("@/components/Blog"));
export const Route = createFileRoute("/blogs/")({
    component: Blog,
});
