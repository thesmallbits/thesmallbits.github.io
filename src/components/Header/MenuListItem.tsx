import { cn } from "@d1vij/shit-i-always-use";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import styles from "./header.module.css";
import type { MenuListProps } from "./MenuList";
import { useMenuState } from "./MenuStateContext";

export type MenuListItemProps = MenuListProps["links"][number];
export function MenuListItem(props: MenuListItemProps) {
    const { setIsOpen } = useMenuState();
    function handleClick() {
        setIsOpen(false);
    }

    let elm: ReactNode;
    switch (props.type) {
        case "external": {
            elm = (
                <a href={props.to} onClick={handleClick}>
                    {props.title}
                </a>
            );
            break;
        }
        case "internal": {
            elm = (
                <Link to={props.to} params={props.slug} onClick={handleClick}>
                    {props.title}
                </Link>
            );
            break;
        }
    }

    return (
        <li
            className={cn(
                styles.listItem,
                "grid grid-cols-[auto_1fr]",
                "text-sm sm:text-base",
                "decoration-2 decoration-light-border decoration-dotted hover:underline active:underline",
            )}
        >
            <div
                className={cn(
                    styles.thelittledash,
                    "place-self-center",
                    "mr-1 h-0.5 w-3 rounded-r-4xl bg-light-border",
                )}
            ></div>
            {elm}
        </li>
    );
}
