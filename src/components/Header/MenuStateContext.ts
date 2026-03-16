import type { StateSetterFunction } from "@d1vij/shit-i-always-use";
import { createContext, useContext } from "react";

export type MenuStateContextType = {
    isOpen: boolean;
    setIsOpen: StateSetterFunction<boolean>;
};
export const MenuStateContext = createContext<MenuStateContextType | null>(
    null,
);

export function useMenuState() {
    const ctx = useContext(MenuStateContext);
    if (!ctx) throw new Error("pls define the ctx 🙏");
    return ctx;
}
