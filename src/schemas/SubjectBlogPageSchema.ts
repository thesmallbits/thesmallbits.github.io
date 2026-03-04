import { Registry } from "@d1vij/jassm";
import * as v from "valibot";
import { RegistryKeySchema } from "@/content/registry";

export const ValidSubjects = ["chemistry", "physics", "maths", "general"] as const;
export const ValidSubjectSchema = v.picklist(ValidSubjects);

export enum UNDEFINED {
    READING_TIME = -1,
    QUOTE = "6969UNDEFINED QUOTE6969",
    QUOTE_AUTHOR = "6969UNDEFINED QUOTE AUTHOR6969",
}

export const HotLinkSchema = v.object({
    url: RegistryKeySchema,
    title: v.string(),
    summary: v.optional(v.string(), ""),
    reading_minutes: v.optional(v.number(), UNDEFINED.READING_TIME),
});
export type HotLink = v.InferInput<typeof HotLinkSchema>;

export const SubjectBlogPageSchema = v.object({
    title: v.pipe(v.string(), v.trim(), v.minLength(1)),
    quote: v.pipe(v.optional(v.string(), UNDEFINED.QUOTE), v.description("the quote to show below the subject title")),
    quote_author: v.pipe(v.optional(v.string(), UNDEFINED.QUOTE_AUTHOR), v.description("quote author")),
    subject_registry: v.pipe(
        v.instance(Registry),
        v.description(
            "the registry instance for this particular subject. useful to putting all the available blog links",
        ),
    ),
    hot_links: v.pipe(
        v.array(HotLinkSchema),
        v.minLength(0),
        v.description("blogs to preview on the subject's home page"),
    ),
});

// what in the convoluted shit is this
export const SubjectBlogIndexSchema = v.object(v.entriesFromList(ValidSubjects, SubjectBlogPageSchema));
export type SubjectBlogIndex = v.InferInput<typeof SubjectBlogIndexSchema>;
