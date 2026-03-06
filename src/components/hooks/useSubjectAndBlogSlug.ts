import { useMemo } from "react";
import * as v from "valibot";
import type { BlogRegistryEntriesUrls } from "@/content/registry";
import { ValidSubjectSchema } from "@/schemas";

const regexp = /^\/blogs\/(\w+)\/(.*)$/;

export function useSubjectAndBlogSlug(path: BlogRegistryEntriesUrls) {
    const err = Error(`Invalid path passed (${path}). Ideally this shouldnt have happend, but here we are 🤷`);
    return useMemo(() => {
        const groups = regexp.exec(path);
        if (!groups) throw err;

        const results = v.safeParse(ValidSubjectSchema, groups[1]);
        if (!results.success) {
            throw err;
        }

        return {
            subject: results.output,
            blog: groups[2],
        };
    }, [path, err]);
}
