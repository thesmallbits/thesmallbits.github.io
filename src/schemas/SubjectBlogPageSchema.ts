import * as v from "valibot";
import { BlogRegistryKeySchema } from "@/content/BlogRegistry";
import { UNDEFINED_QUOTE, UNDEFINED_QUOTE_AUTHOR } from "./BlogMetadataSchema";

export const ValidSubjects = ["chemistry", "physics", "maths", "general"] as const;
export const ValidSubjectSchema = v.picklist(ValidSubjects);

export const SubjectBlogPageSchema = v.object({
    title: v.pipe(v.string(), v.trim(), v.minLength(1)),
    regex: v.pipe(
        v.instance(RegExp),
        v.description("the regex pattern to identify splats of this particular subject from the registry keys"),
    ),
    quote: v.pipe(v.optional(v.string(), UNDEFINED_QUOTE), v.description("the quote to show below the subject title")),
    quote_author: v.pipe(v.optional(v.string(), UNDEFINED_QUOTE_AUTHOR), v.description("quote author")),
    highlights: v.pipe(v.array(BlogRegistryKeySchema), v.description("blogs to preview on the subject's home page")),
    background_image: v.string(),
});

// what in the convoluted shit is this
export const SubjectBlogIndexSchema = v.object(v.entriesFromList(ValidSubjects, SubjectBlogPageSchema));
export type SubjectBlogIndex = v.InferInput<typeof SubjectBlogIndexSchema>;
