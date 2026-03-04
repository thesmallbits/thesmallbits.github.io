import { createFileRoute } from "@tanstack/react-router";

import { lazy } from "react";
import * as v from "valibot";
import { ValidSubjectSchema } from "@/schemas";

const SubjectHome = lazy(() => import("@/components/SubjectHome"));

import { subjectPageIndex } from "@/content/blogHomePages";

export const Route = createFileRoute("/blogs/$subject/")({
    component: SubjectHome,
    params: {
        parse({ subject }) {
            return {
                subject: v.parse(ValidSubjectSchema, subject),
            };
        },
    },
    loader({ params: { subject } }) {
        return subjectPageIndex[subject];
    },
});
