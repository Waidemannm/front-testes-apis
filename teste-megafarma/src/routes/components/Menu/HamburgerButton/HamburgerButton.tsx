import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { useMenu } from "../hooks/useMenu";

type HamburgerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label?: string;
};

const HamburgerButton = forwardRef<HTMLButtonElement, HamburgerButtonProps>(function HamburgerButton(
    { className = "", label = "Abrir menu", ...rest },
    ref
) {
    const { isOpen, toggle } = useMenu();

    return (
        <button
            ref={ref}
            type="button"
            aria-label={label}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={toggle}
            className={`relative inline-flex items-center justify-center w-12 h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all duration-300 hover:bg-white/10 ${className}`}
            {...rest}
        >
            <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
            <div className="relative w-6 h-6">
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out transform ${isOpen ? "rotate-45 translate-y-2" : "translate-y-0"}`}></span>
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 translate-x-3" : "opacity-100"}`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out transform ${isOpen ? "-rotate-45 -translate-y-2" : "translate-y-0"}`}></span>
            </div>
        </button>
    );
});

export default HamburgerButton;


