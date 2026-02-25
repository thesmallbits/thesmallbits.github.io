import {
    cn,
    useVibrate,
    type PropsWithChildren,
} from "@d1vij/shit-i-always-use";
import { Link, type LinkProps, useLocation } from "@tanstack/react-router";
import { useState } from "react";

import Menu from "./HeaderMenu";

function HeaderInteractable(props: PropsWithChildren<object>) {
    return (
        <span
            className={cn(
                "flex w-fit cursor-pointer items-center justify-center gap-1 rounded border border-light-border bg-light-secondary p-1 text-light-text-secondary text-sm hover:text-light-text-primary lg:text-xl",
                "hover:shadow-xs",
            )}
        >
            {props.children}
        </span>
    );
}

type HeaderLinkProps = LinkProps & {
    title: string;
};
function HeaderLink({ title, to }: HeaderLinkProps) {
    const vibrator = useVibrate();
    return (
        <HeaderInteractable>
            <Link
                className={cn("text-nowrap")}
                to={to}
                onClick={() => vibrator(50)}
            >
                {title}
            </Link>
        </HeaderInteractable>
    );
}
type HeaderButtonProps = {
    title: string;
    action: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
function HeaderButton({ title, action }: HeaderButtonProps) {
    const vibrator = useVibrate();
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        vibrator(100);
        action(e);
    }
    return (
        <HeaderInteractable>
            <button
                onClick={handleClick}
                type="button"
                className="cursor-pointer"
            >
                {title}
            </button>
        </HeaderInteractable>
    );
}

import { HeaderMenuLists } from "@/content/HeaderMenuLists";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    function toggleMenu() {
        setIsOpen((o) => !o);
    }
    const root = pathname === "/";

    return (
        <header
            className={cn(
                "relative",
                "primary-border cool-background-shit",
                "relative z-30 h-fit w-full border-0 border-t-0 border-b",
                "grid",
                root ? "grid-cols-2" : "grid-cols-[auto_1fr_auto]",
            )}
        >
            {isOpen && <Menu lists={HeaderMenuLists} />}
            <span className="m-2 ml-4 flex gap-2">
                <HeaderButton title="Menu" action={toggleMenu} />
            </span>
            <h1
                className={cn(
                    "mx-auto w-fit place-self-center border-light-border border-x-2 bg-light-secondary px-3 pt-2 text-lg h-full  md:text-4xl lg:text-5xl",
                    "text-center",
                    root && "hidden",
                    // "border-transparent bg-transparent text-transparent size-0",
                )}
            >
                The Small Bits
            </h1>
            <span className="m-2 mr-5 w-fit place-self-end">
                <HeaderLink to="/about" title="About Us" />
            </span>
        </header>
    );
}
