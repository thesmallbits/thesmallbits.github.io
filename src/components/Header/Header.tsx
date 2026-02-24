import { cn, type PropsWithChildren } from "@d1vij/shit-i-always-use";
import { Hash, type LucideIcon } from "lucide-react";
import { Link, type LinkProps } from "@tanstack/react-router";
import { useState } from "react";

import Menu from "./HeaderMenu";

function HeaderInteractable(props: PropsWithChildren) {
    return (
        <span
            className={cn(
                "flex justify-center items-center w-fit gap-1 text-sm lg:text-xl text-light-text-secondary bg-light-secondary border border-light-border rounded p-1 cursor-pointer hover:text-light-text-primary",
                "hover:shadow-xs",
            )}
        >
            {props.children}
        </span>
    );
}

type HeaderLinkProps = LinkProps & {
    hash?: boolean;
    title: string;
};
function HeaderLink({ hash = true, title, to }: HeaderLinkProps) {
    return (
        <HeaderInteractable>
            {hash && <Hash className="size-4 lg:size-4" />}
            <Link className={cn("")} to={to}>
                {title}
            </Link>
        </HeaderInteractable>
    );
}
type HeaderButtonProps = {
    Content: string | LucideIcon;
    action: VoidFunction;
};
function HeaderButton({ Content: Title, action }: HeaderButtonProps) {
    return (
        <HeaderInteractable>
            <button onClick={action} type="button" className="cursor-pointer">
                {typeof Title === "string" ? Title : <Title />}
            </button>
        </HeaderInteractable>
    );
}

import { HeaderMenuLists } from "@/content/HeaderMenuLists";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen((o) => !o);
    }
    return (
        <header
            className={cn(
                "relative",
                "primary-border cool-background-shit",
                "relative z-30 h-fit border-0 border-t-0 border-b w-full",
                "grid grid-cols-[1fr_auto_1fr]",
            )}
        >
            {isOpen && <Menu lists={HeaderMenuLists} />}
            <span className="flex gap-2 mr-4 m-2">
                <HeaderButton Content="Menu" action={toggleMenu} />
            </span>
            <h1
                className={cn(
                    "self-center mx-auto pt-2 px-3 border-x-2 border-light-border text-2xl md:text-4xl w-fit bg-light-secondary lg:text-5xl",
                )}
            >
                The Small Bits
            </h1>
            <span className="flex gap-2 mr-4 m-2 place-self-end">
                <HeaderLink to="/about" title="About Us" />
            </span>
        </header>
    );
}
