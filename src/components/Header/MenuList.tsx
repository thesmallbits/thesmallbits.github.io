import { cn } from "@d1vij/shit-i-always-use";
import type { LinkProps } from "@tanstack/react-router";
import styles from "./header.module.css";
import { MenuListItem } from "./MenuListItem";

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
export function MenuList(props: MenuListProps) {
    const linkElms = props.links.map((l) => (
        <MenuListItem {...l} key={l.title} />
    ));

    return (
        <div className={cn(styles.menulist, "relative")}>
            <h2
                className={cn(
                    styles.listTitle,
                    "w-fit",
                    "font-semibold text-base text-light-text-secondary sm:text-xl",
                    "rounded-r-xs border-light-border border-b-2",
                )}
            >
                {props.title}
            </h2>
            <div
                className={cn(
                    styles.indexline,
                    "absolute w-0.5 rounded--2xl bg-light-border",
                )}
            ></div>
            <ul className={cn(styles.list, "")}>{linkElms}</ul>
        </div>
    );
}
