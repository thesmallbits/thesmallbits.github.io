import { cn, type ReactRef } from "@d1vij/shit-i-always-use";
import { useEffect, useMemo, useRef } from "react";
import styles from "./header.module.css";
import { MenuList, type MenuListProps } from "./MenuList";
import { useMenuState } from "./MenuStateContext";

type MenuProps = {
    lists: MenuListProps[];
    menuButtonRef: ReactRef<HTMLButtonElement | null>;
};
export default function Menu({ lists, menuButtonRef }: MenuProps) {
    const elms = useMemo(() => lists.map((l) => <MenuList key={l.title} {...l} />), [lists]);
    const ref = useRef<HTMLDivElement>(null);
    const { isOpen, setIsOpen } = useMenuState();

    // NOTE: events when menu closes
    // 1. user has scrolled anywhere the document (this works fine until the menu itself has scroll)
    // 2. user presses Escape key
    // 3. user clicks outside the menu
    // 4. user clicks on any of the menu links
    useEffect(() => {
        // NOTE: this may cause issues if the dropped down menu goes outside of the viewport
        function handleScroll() {
            setIsOpen(false);
        }
        function handleKeyPress(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        }
        function handleClick(e: MouseEvent) {
            const self = ref.current;
            const menuButton = menuButtonRef.current;
            if (!self || !menuButton) return;

            // the element we clicked at
            const target = e.target as Node;
            if (menuButton.contains(target)) {
                return;
            }
            // we clicked outside of the header
            else if (!self.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("scroll", handleScroll);
        };
    }, [setIsOpen, menuButtonRef.current]);

    return (
        <div
            ref={ref}
            className={cn(
                styles.headerMenu,
                "rounded-b-2xl bg-light-secondary shadow",
                "absolute top-full mx-4",
                "border-2 border-light-border border-t",
                "grid grid-cols-[1fr_auto]",
                "w-[90%] p-4 md:w-[60%] lg:w-[50%]",
                isOpen && styles.open,
            )}
        >
            <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3")}>{elms}</div>

            {/*ribbon*/}
            <div className="relative h-[90%] w-10 shadow-xl">
                <div className="absolute inset-0 -mt-5 size-full bg-light-shade-red">
                    <div className="mx-auto mt-1 size-3 rounded-3xl bg-light-text-bg"></div>
                </div>
                <div className={cn(styles.ribbon, "absolute bottom-0 left-0 aspect-square w-full translate-y-2")}></div>
            </div>
        </div>
    );
}
