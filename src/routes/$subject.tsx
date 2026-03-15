import { createFileRoute } from "@tanstack/react-router";
import * as v from "valibot";
import SubjectHome from "@/components/SubjectHome";
import blogRegistry from "@/content/BlogRegistry";
import { subjectPageIndex } from "@/content/subjectHomePages";
import { getFromLocalStorage, groupMetadataAlphabetically } from "@/lib";
import { filterArrayByRegex } from "@/lib/filterArray";
import { type RegistryMetadata, ValidSubjectSchema } from "@/schemas";

export const Route = createFileRoute("/$subject")({
    component: SubjectHome,
    params: {
        parse: ({ subject }) => ({
            subject: v.parse(ValidSubjectSchema, subject),
        }),
    },
    loader({ params: { subject } }) {
        const content = subjectPageIndex[subject];

        const subjectSplats: string[] = JSON.parse(
            getFromLocalStorage(content.title, () => {
                const splats = blogRegistry.keys;
                // all the splats which correspond to this particular subject
                const subjectSplats = filterArrayByRegex(splats, content.regex);
                return JSON.stringify(subjectSplats);
            }),
        );

        const subjectMetadatas = (Object.values(blogRegistry.metadata) as RegistryMetadata[]).filter((m) =>
            subjectSplats.includes(m.__splat),
        );
        const groups: ReturnType<typeof groupMetadataAlphabetically> = JSON.parse(
            getFromLocalStorage(`${content.title}-groups`, () => {
                const groups = groupMetadataAlphabetically(subjectMetadatas, "title");
                return JSON.stringify(groups);
            }),
        );

        return {
            content: content,
            blogs: subjectMetadatas,
            groups: groups,
        };
    },
});
