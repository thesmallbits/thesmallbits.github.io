// TODO: Add backgrounds for all subjects
import * as v from "valibot";
import { type SubjectBlogIndex, SubjectBlogIndexSchema } from "@/schemas";

// pls ensure the schema is valid 🙏🏻
// we have no build time checks (yet)
// and anything ooga booga will crash
// the whole thing at runtime
const index: SubjectBlogIndex = {
    chemistry: {
        regex: /^chemistry/,
        title: "Chemistry",
        quote: "Chemistry jaaye bhaad me, mera dhyaan to meri stree par rahega",
        quote_author: "Divij",
        highlights: ["chemistry/fischer-indole-synthesis", "chemistry/beckmann-rearrangement"],
        background_image: "/blog_home_backdrops/chemistry.png",
    },
    maths: {
        regex: /^maths/,
        title: "Mathematics",
        quote: "Chemistry jaaye bhaad me, mera dhyaan to meri stree par rahega",
        quote_author: "Divij",
        highlights: [],
        background_image: "/blog_home_backdrops/chemistry.png",
    },
    physics: {
        regex: /^physics/,
        title: "Physics",
        quote: "Chemistry jaaye bhaad me, mera dhyaan to meri stree par rahega",
        quote_author: "Divij",
        highlights: [],
        background_image: "/blog_home_backdrops/chemistry.png",
    },
    general: {
        regex: /^general/,
        title: "General",
        quote: "Chemistry jaaye bhaad me, mera dhyaan to meri stree par rahega",
        quote_author: "Divij",
        highlights: [],
        background_image: "/blog_home_backdrops/chemistry.png",
    },
} as const;

export const subjectPageIndex = v.parse(SubjectBlogIndexSchema, index);
