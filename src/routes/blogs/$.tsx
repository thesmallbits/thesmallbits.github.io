import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import * as v from "valibot";
import { MetaSchema } from "@/schemas";

const { registry } = await import("@/content/registry");
const BlogSlug = lazy(() => import("@/components/Blog/BlogSlug"));
export const Route = createFileRoute("/blogs/$")({
    component: BlogSlug,
    loader({ params: { _splat } }) {
        console.log(_splat);
        const path = `/${_splat}`;
        const metadata = registry.getMetadata(path);
        const results = v.safeParse(MetaSchema, metadata);

        if (!results.success) {
            throw results;
        }

        return {
            component: registry.getComponent(path),
            exports: registry.getExport(path),
            metadata: results.output,
        };
    },
});
