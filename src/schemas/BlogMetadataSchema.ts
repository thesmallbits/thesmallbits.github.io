import * as v from "valibot";

const DateStringSchema = v.pipe(v.string(), v.regex(/^\d{2}-\d{2}-\d{4}$/));

export const MetaSchema = v.object({
    author: v.string(),
    created_at: DateStringSchema,
    modified_at: DateStringSchema,
    tags: v.array(v.string()),
    summary: v.optional(v.string(), ""),
});
