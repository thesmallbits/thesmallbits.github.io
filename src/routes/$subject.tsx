import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import * as v from "valibot";

const SubjectHome = lazy(() => import("@/components/SubjectHome"));

import { subjectPageIndex } from "@/content/blogHomePages";
import { ValidSubjectSchema } from "@/schemas";

export const Route = createFileRoute("/$subject")({
    component: SubjectHome,
    params: {
        parse: ({ subject }) => ({
            subject: v.parse(ValidSubjectSchema, subject),
        }),
    },
    loader({ params: { subject } }) {
        return subjectPageIndex[subject];
    },
});
