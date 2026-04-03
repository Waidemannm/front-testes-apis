import { createContext, useContext } from "react";

export type MenuContextValue = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};

export const MenuContext = createContext<MenuContextValue | undefined>(undefined);

export function useMenuContext(): MenuContextValue {
    const ctx = useContext(MenuContext);
    if (!ctx) {
        throw new Error("useMenuContext deve ser usado dentro de <MenuProvider>");
    }
    return ctx;
}
