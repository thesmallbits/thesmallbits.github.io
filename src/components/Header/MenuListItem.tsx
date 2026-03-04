import { Link } from "@tanstack/react-router";
import type { MenuListProps } from "./MenuList";
import { useMenuState } from "./MenuStateContext";

export type MenuListItemProps = MenuListProps["links"][number];
export function MenuListItem(props: MenuListItemProps) {
    const { setIsOpen } = useMenuState();
    function handleClick() {
        setIsOpen(false);
    }

    switch (props.type) {
        case "external": {
            return (
                <li>
                    <a href={props.to} onClick={handleClick}>
                        {props.title}
                    </a>
                </li>
            );
        }
        case "internal": {
            return (
                <li>
                    <Link to={props.to} params={props.slug} onClick={handleClick}>
                        {props.title}
                    </Link>
                </li>
            );
        }
    }
}
