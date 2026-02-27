import { createFileRoute, notFound } from "@tanstack/react-router";
import { lazy } from "react";
import { z } from "zod/mini";
import registry, { entries, RegistryKeySchema, type RegistryType } from "@/content/registry";

const BlogSlug = lazy(() => import("@/components/Blog/BlogSlug"));

export const Route = createFileRoute("/blogs/$subject/$blog")({
    component: BlogSlug,
    params: {
        parse: ({ blog, subject }) => ({
            subject: z.string().check(z.minLength(1), z.trim()).parse(subject),
            blog: z.string().check(z.minLength(1), z.trim()).parse(blog),
        }),
    },
    loader: ({ params }) => {
        const path = `/blogs/${params.subject}/${params.blog}`;
        const result = RegistryKeySchema.safeParse(path);

        if (!result.success) {
            throw notFound({ data: result.error });
            // throw result.error;
        }

        return { path: path, Component: registry.getComponent(path as typeof entries[number]) };
    },
    notFoundComponent: ({ data }) => {
        return (
            <div>
                <p>Blog not found</p>
                <div className="w-[40%] text-wrap">{String(data)}</div>
            </div>
        );
    },
});
