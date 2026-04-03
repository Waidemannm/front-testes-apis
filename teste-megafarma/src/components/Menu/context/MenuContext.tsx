import { useCallback, useMemo, useState, type PropsWithChildren } from "react";
import { MenuContext } from "./menu-context";

export function MenuProvider({ children }: PropsWithChildren) {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    const value = useMemo(() => ({ isOpen, open, close, toggle }), [isOpen, open, close, toggle]);

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}


