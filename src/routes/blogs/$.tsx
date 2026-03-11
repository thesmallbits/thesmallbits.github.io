import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import * as v from "valibot";
import { RegistryKeySchema } from "@/content/registry";
import { RegistryMetadataSchema } from "@/schemas";

const { registry } = await import("@/content/registry");
const BlogSlug = lazy(() => import("@/components/BlogSlug"));

/**
 * Replacement when the splat is undefined, maybe useful on the error handling page
 */
export const UNDEFINED_PATH = "87650307-114d-4600-b067-daac48fea4f0"; // no sane person will have a file named like this

const SearchSchema = v.object({
    focus: v.optional(v.string()),
});

export const Route = createFileRoute("/blogs/$")({
    component: BlogSlug,
    params: {
        parse: ({ _splat }) => {
            return {
                _splat: v.parse(RegistryKeySchema, _splat),
            };
        },
    },
    loader({ params: { _splat } }) {
        const metadata = registry.getMetadata(_splat);
        const results = v.safeParse(RegistryMetadataSchema, metadata);
        if (!results.success) {
            throw results;
        }

        return {
            component: registry.getComponent(_splat),
            exports: registry.getExport(_splat),
            metadata: results.output,
        };
    },
    validateSearch(s) {
        return v.parse(SearchSchema, s);
    },
});
