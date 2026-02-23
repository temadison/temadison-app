"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav className="text-sm" aria-label="Primary">
            <ul className="m-0 flex flex-wrap items-center justify-end p-0 list-none">
                {links.map((link) => {
                    const isActive =
                        link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                    return (
                        <li key={link.href} className="inline-block mr-8 last:mr-0">
                            <Link
                                href={link.href}
                                aria-current={isActive ? "page" : undefined}
                                className={`inline-block px-3 border-b-2 pb-0.5 transition-colors ${
                                    isActive
                                        ? "border-black/70 text-black"
                                        : "border-transparent text-black/70 hover:border-black/40 hover:text-black"
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
