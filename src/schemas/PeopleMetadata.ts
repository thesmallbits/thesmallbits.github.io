import { AppWindow, Mailbox } from "lucide-react";
import { siGithub, siYoutube } from "simple-icons";
import * as v from "valibot";

export const LinksIcons = {
    github: siGithub,
    youtube: siYoutube,
    website: AppWindow,
    mail: Mailbox,
} as const;

const LinksSchema = v.pipe(
    v.union([
        v.object({
            for: v.pipe(v.string(), v.email()),
            url: v.pipe(v.string(), v.url()),
        }),
        v.object({
            for: v.union([v.literal("youtube"), v.literal("github"), v.literal("website")]),
            url: v.pipe(v.string(), v.url()),
        }),
    ]),

    // v.transform(({for}) => {
    //     let icon;
    // })
);

export const PeopleSchema = v.object({
    name: v.string(),
    id: v.pipe(v.string(), v.nanoid()),
    image_href: v.string(),
    links: v.array(LinksSchema),
});

export const PeopleMetadataSchema = v.array(PeopleSchema);
