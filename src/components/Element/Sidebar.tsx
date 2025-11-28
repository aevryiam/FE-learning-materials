"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/slicing", label: "Slicing Figma" },
    { href: "/tailwind", label: "Tailwind CSS" },
    { href: "/nextjs", label: "Next.js" },
    { href: "/redux", label: "Redux" },
    { href: "/fetching", label: "Data Fetching" },
    { href: "/responsive", label: "Responsive Design" },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-sm border-r overflow-y-auto lg:block hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-black mb-4">
          Materi Pembelajaran
        </h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                pathname === item.href
                  ? "bg-blue-100 text-blue-700 border-l-4 border-blue-500"
                  : "text-black hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
