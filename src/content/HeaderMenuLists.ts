import type { MenuListProps } from "@/components/Header/MenuList";

const BlogsList: MenuListProps = {
    title: "Subjects",
    links: [
        {
            title: "All",
            type: "internal",
            to: "/subjects",
            slug: {},
        },
        {
            title: "Physics",
            type: "internal",
            to: "/subjects/$name",
            slug: {
                name: "physics",
            },
        },
        {
            title: "Chemistry",
            type: "internal",
            to: "/subjects/$name",
            slug: {
                name: "chemistry",
            },
        },
        {
            title: "Mathematics",
            type: "internal",
            to: "/subjects/$name",
            slug: {
                name: "maths",
            },
        },
        {
            title: "General",
            type: "internal",
            to: "/subjects/$name",
            slug: {
                name: "general",
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
        // {
        //     title: "Youtube",
        //     type: "external",
        //     to: "https://github.com/thesmallbits",
        // },
        // {
        //     title: "Instagram",
        //     type: "external",
        //     to: "https://github.com/thesmallbits",
        // },
        // {
        //     title: "Some cool site",
        //     type: "external",
        //     to: "https://github.com/thesmallbits",
        // },
        // {
        //     title: "Some Other cool site",
        //     type: "external",
        //     to: "https://github.com/thesmallbits",
        // },
    ],
} as const;

const Miscellaneous: MenuListProps = {
    title: "Miscellaneous",
    links: [
        {
            title: "People",
            type: "internal",
            to: "/people",
            slug: {},
        },
        {
            title: "Join Us",
            type: "internal",
            to: "/join-us",
            slug: {},
        },
        {
            title: "About Us",
            type: "internal",
            to: "/about",
            slug: {},
        },
    ],
};

export const HeaderMenuLists = [BlogsList, RepositoryList, Miscellaneous, ContactList];
