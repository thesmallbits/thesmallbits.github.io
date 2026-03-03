import { createFileRoute, notFound } from "@tanstack/react-router";
import { lazy } from "react";
import * as v from "valibot";
import registry, { type entries, RegistryKeySchema } from "@/content/registry";
import { ValidSubjectSchema } from "@/schemas";

const BlogSlug = lazy(() => import("@/components/Blog/BlogSlug"));

const BlogPathSchema = v.pipe(v.string(), v.trim(), v.minLength(1));

export const Route = createFileRoute("/blogs/$subject/$blog")({
    component: BlogSlug,
    params: {
        parse({ blog, subject }) {
            return {
                blog: v.parse(BlogPathSchema, blog),
                subject: v.parse(ValidSubjectSchema, subject),
            };
        },
    },
    loader: ({ params }) => {
        // NOTE: if in future we change the virtual path at
        // registry then this must also be changed
        const path = `/blogs/${params.subject}/${params.blog}`;
        const result = v.safeParse(RegistryKeySchema, path);
        if (!result.success) {
            throw notFound({ data: result });
        }

        type Path = (typeof entries)[number];
        return {
            path: path,
            Component: registry.getComponent(path as Path),
            exportPromise: registry.getExport(path as Path),
        };
    },

    // show this when a notFound error is thrown
    notFoundComponent: ({ data }) => {
        return (
            <div>
                <p>Blog not found</p>
                <div className="w-[40%] text-wrap">{JSON.stringify(data)}</div>
            </div>
        );
    },
});
