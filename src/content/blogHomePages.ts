import * as v from "valibot";
import { type SubjectBlogIndex, SubjectBlogIndexSchema } from "@/schemas";

const index: SubjectBlogIndex = {
    chemistry: {
        title: "Chemistry",
        hot_links: [{ url: "/blogs/chemistry/beckmann-rearrangement" }],
    },
    maths: {
        title: "Mathematics",
        hot_links: [],
    },
    physics: {
        title: "Physics",
        hot_links: [],
    },
    general: {
        title: "General",
        hot_links: [],
    },
} as const;

export const subjectPageIndex = v.parse(SubjectBlogIndexSchema, index);
