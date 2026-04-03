import { Link } from "react-router-dom";
import { useState } from "react";

type DropdownItem = { label: string; to: string; color?: string };
type NavItem = { label: string; color?: string; children: DropdownItem[] };

const navItems: NavItem[] = [
  {
    label: "Cliente",
    children: [
      { label: "Find All",   to: "/cliente",        color: "text-white" },
      { label: "Find by Id", to: "/cliente/id",     color: "text-white" },
      { label: "Save",       to: "/cliente/save",   color: "text-green-400" },
      { label: "Update",     to: "/cliente/update", color: "text-yellow-400" },
      { label: "Delete",     to: "/cliente/delete", color: "text-red-400" },
    ],
  },
  {
    label: "Remédio",
    children: [
      { label: "Find All",   to: "/remedio",        color: "text-white" },
      { label: "Find by Id", to: "/remedio/id",     color: "text-white" },
      { label: "Save",       to: "/remedio/save",   color: "text-green-400" },
      { label: "Update",     to: "/remedio/update", color: "text-yellow-400" },
      { label: "Delete",     to: "/remedio/delete", color: "text-red-400" },
    ],
  },
  {
    label: "Venda",
    children: [
      { label: "Find All",   to: "/venda",        color: "text-white" },
      { label: "Find by Id", to: "/venda/id",     color: "text-white" },
      { label: "Save",       to: "/venda/save",   color: "text-green-400" },
      { label: "Update",     to: "/venda/update", color: "text-yellow-400" },
    ],
  },
  {
    label: "Item Vendido",
    children: [
      { label: "Find All",   to: "/itemvendido",        color: "text-white" },
      { label: "Find by Id", to: "/itemvendido/id",     color: "text-white" },
      { label: "Update",     to: "/itemvendido/update", color: "text-yellow-400" },
    ],
  },
];

export default function Menu() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <nav className="flex items-center gap-6">
      {navItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => setOpen(item.label)}
          onMouseLeave={() => setOpen(null)}
        >
          <button className="text-white hover:text-blue-200 transition-colors duration-200 font-medium flex items-center gap-1">
            {item.label}
            <span className="text-xs opacity-60">▾</span>
          </button>
          {open === item.label && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-[#161628] border border-[#2a2a4a] rounded-xl shadow-xl z-50 py-2 overflow-hidden">
              {item.children.map((child) => (
                <Link
                  key={child.to}
                  to={child.to}
                  onClick={() => setOpen(null)}
                  className={`flex items-center px-4 py-2 text-sm hover:bg-white/10 transition-colors ${child.color ?? "text-white"}`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
