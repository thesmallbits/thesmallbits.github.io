import { createFileRoute } from "@tanstack/react-router";

import SubjectIndex from "@/components/SubjectIndex";

export const Route = createFileRoute("/subjects/")({
    component: SubjectIndex,
    head() {
        return {
            meta: [{ title: "Subjects @ thesmallbits" }],
        };
    },
});
