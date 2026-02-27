import { cn } from "@d1vij/shit-i-always-use";
import { Link, type LinkProps } from "@tanstack/react-router";
import { useMemo } from "react";

type ExternalLink = {
    title: string;
    type: "external";
    to: string;
};
type InternalLink = {
    title: string;
    type: "internal";
    to: LinkProps["to"];
    slug: LinkProps["params"];
};
export type MenuListProps = {
    title: string;
    links: (InternalLink | ExternalLink)[];
};
function MenuList(props: MenuListProps) {
    const linkElms = props.links.map((l) => (
        <li key={l.title}>
            {l.type === "external" ? (
                <a href={l.to}>{l.title}</a>
            ) : (
                <Link to={l.to} params={l.slug}>
                    {l.title}
                </Link>
            )}
        </li>
    ));

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>{linkElms}</ul>
        </div>
    );
}

type MenuProps = {
    lists: MenuListProps[];
};
export default function Menu({ lists }: MenuProps) {
    const elms = useMemo(() => lists.map((l) => <MenuList key={l.title} {...l} />), [lists]);

    return (
        <div
            className={cn(
                "rounded-b-2xl bg-light-secondary",
                "border-2 border-light-border border-t",
                "absolute top-full mx-4 min-h-[60dvh] w-[90%] bg-inherit shadow-xs transition-all md:w-[70%]",
                "grid p-4",
            )}
        >
            {elms}
        </div>
    );
}
