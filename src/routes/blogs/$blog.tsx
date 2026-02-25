import { lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";

import {
    RegistryKeySchema,
    type RegistryType,
    registry,
} from "@/content/registry";

const BlogSlug = lazy(() => import("@/components/Blog/BlogSlug"));

export const Route = createFileRoute("/blogs/$blog")({
    component: BlogSlug,
    loader: ({ location }) => {
        RegistryKeySchema.parse(location.pathname);
        return registry[location.pathname as keyof RegistryType];
    },
    head: (p) => ({
        meta: [{ title: p.params.blog }],
    }),
});
