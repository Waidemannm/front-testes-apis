import { Link } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";
import React, { useEffect, useState } from "react";
import {
  FaUser, FaPills, FaShoppingCart, FaBoxOpen,
  FaList, FaIdCard, FaSave, FaUpload, FaTrash,
  FaChevronDown, FaChevronUp,
} from "react-icons/fa";

type Section = {
  label: string;
  icon: React.ReactNode;
  links: { label: string; to: string; color?: string; icon: React.ReactNode }[];
};

const sections: Section[] = [
  {
    label: "Cliente",
    icon: <FaUser />,
    links: [
      { label: "Find All",   to: "/cliente",        icon: <FaList />,     color: "text-white" },
      { label: "Find by Id", to: "/cliente/id",     icon: <FaIdCard />,   color: "text-white" },
      { label: "Save",       to: "/cliente/save",   icon: <FaSave />,     color: "text-green-400" },
      { label: "Update",     to: "/cliente/update", icon: <FaUpload />,   color: "text-yellow-400" },
      { label: "Delete",     to: "/cliente/delete", icon: <FaTrash />,    color: "text-red-400" },
    ],
  },
  {
    label: "Remédio",
    icon: <FaPills />,
    links: [
      { label: "Find All",   to: "/remedio",        icon: <FaList />,     color: "text-white" },
      { label: "Find by Id", to: "/remedio/id",     icon: <FaIdCard />,   color: "text-white" },
      { label: "Save",       to: "/remedio/save",   icon: <FaSave />,     color: "text-green-400" },
      { label: "Update",     to: "/remedio/update", icon: <FaUpload />,   color: "text-yellow-400" },
      { label: "Delete",     to: "/remedio/delete", icon: <FaTrash />,    color: "text-red-400" },
    ],
  },
  {
    label: "Venda",
    icon: <FaShoppingCart />,
    links: [
      { label: "Find All",   to: "/venda",        icon: <FaList />,   color: "text-white" },
      { label: "Find by Id", to: "/venda/id",     icon: <FaIdCard />, color: "text-white" },
      { label: "Save",       to: "/venda/save",   icon: <FaSave />,   color: "text-green-400" },
      { label: "Update",     to: "/venda/update", icon: <FaUpload />, color: "text-yellow-400" },
    ],
  },
  {
    label: "Item Vendido",
    icon: <FaBoxOpen />,
    links: [
      { label: "Find All",   to: "/itemvendido",        icon: <FaList />,   color: "text-white" },
      { label: "Find by Id", to: "/itemvendido/id",     icon: <FaIdCard />, color: "text-white" },
      { label: "Update",     to: "/itemvendido/update", icon: <FaUpload />, color: "text-yellow-400" },
    ],
  },
];

export default function MobilePanel(): React.ReactElement {
  const { isOpen, close } = useMenu();
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "";
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
    };
  }, [isOpen]);

  const toggle = (label: string) =>
    setExpanded((prev) => (prev === label ? null : label));

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu móvel"
      className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-[var(--color-2)] backdrop-blur-sm transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
        aria-hidden
      />
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-white/90 transition-all duration-500 transform ${
          isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
        }`}
      >
        <nav className="overflow-y-auto overflow-x-hidden flex flex-col gap-3 w-64">
          {sections.map((section) => (
            <div key={section.label}>
              <button
                onClick={() => toggle(section.label)}
                className="flex items-center justify-between w-full gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                <span className="flex items-center gap-3 text-lg font-semibold">
                  {section.icon}
                  {section.label}
                </span>
                {expanded === section.label ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {expanded === section.label && (
                <div className="ml-6 flex flex-col gap-1 mt-1">
                  {section.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={close}
                      className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95 text-sm ${link.color ?? "text-white"}`}
                      role="menuitem"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
