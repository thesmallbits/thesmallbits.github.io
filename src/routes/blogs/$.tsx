import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import * as v from "valibot";
import { RegistryKeySchema } from "@/content/registry";
import { MetadataSchema } from "@/schemas";

const { registry } = await import("@/content/registry");
const BlogSlug = lazy(() => import("@/components/BlogSlug"));

/**
 * Replacement when the splat is undefined, maybe useful on the error handling page
 */
export const UNDEFINED_PATH = "87650307-114d-4600-b067-daac48fea4f0"; // no sane person will have a file named like this

export const Route = createFileRoute("/blogs/$")({
    component: BlogSlug,
    params: {
        parse: ({ _splat }) => {
            if (!_splat?.startsWith("/")) {
                _splat = `/${_splat}`;
            }
            console.log(_splat);
            return {
                _splat: v.parse(RegistryKeySchema, _splat),
            };
        },
    },
    loader({ params: { _splat } }) {
        console.log("1");
        const metadata = registry.getMetadata(_splat);
        console.log("2");
        const results = v.safeParse(MetadataSchema, metadata);

        console.log("3");
        if (!results.success) {
            throw results;
        }
        console.log("4");

        return {
            component: registry.getComponent(_splat),
            exports: registry.getExport(_splat),
            metadata: results.output,
        };
    },
});
