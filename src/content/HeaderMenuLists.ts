import type { MenuListProps } from "@/components/Header/MenuList";

const BlogsList: MenuListProps = {
    title: "Blogs",
    links: [
        {
            title: "Physics",
            type: "internal",
            to: "/$subject",
            slug: {
                subject: "physics",
            },
        },
        {
            title: "Chemistry",
            type: "internal",
            to: "/$subject",
            slug: {
                subject: "chemistry",
            },
        },
        {
            title: "Mathematics",
            type: "internal",
            to: "/$subject",
            slug: {
                subject: "maths",
            },
        },
        {
            title: "General",
            type: "internal",
            to: "/$subject",
            slug: {
                subject: "general",
            },
        },
    ],
};
const RepositoryList: MenuListProps = {
    title: "Content Repositories",
    links: [
        {
            title: "Chemistry",
            type: "internal",
            to: "/repository/$repository",
            slug: { repository: "chemistry" },
        },
        {
            title: "Maths",
            type: "internal",
            to: "/repository/$repository",
            slug: { repository: "maths" },
        },
        {
            title: "Physics",
            type: "internal",
            to: "/repository/$repository",
            slug: { repository: "physics" },
        },
    ],
} as const;

const ContactList: MenuListProps = {
    title: "Socials",
    links: [
        {
            title: "Github",
            type: "external",
            to: "https://github.com/thesmallbits",
        },
        {
            title: "Youtube",
            type: "external",
            to: "https://github.com/thesmallbits",
        },
        {
            title: "Instagram",
            type: "external",
            to: "https://github.com/thesmallbits",
        },
        {
            title: "Some cool site",
            type: "external",
            to: "https://github.com/thesmallbits",
        },
        {
            title: "Some Other cool site",
            type: "external",
            to: "https://github.com/thesmallbits",
        },
    ],
} as const;

export const HeaderMenuLists = [BlogsList, RepositoryList, ContactList];
