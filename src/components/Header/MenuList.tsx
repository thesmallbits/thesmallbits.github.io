import type { LinkProps } from "@tanstack/react-router";
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
    const linkElms = props.links.map((l) => <MenuListItem {...l} key={l.title} />);

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>{linkElms}</ul>
        </div>
    );
}
