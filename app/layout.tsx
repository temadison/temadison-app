import type {Metadata} from "next";
import Link from "next/link";
import {Inter} from "next/font/google";
import "./globals.css";
import NavLinks from "@/app/components/NavLinks";

const inter = Inter({subsets: ["latin"], display: "swap"});

export const metadata: Metadata = {
    title: "temadison.com",
    description: "Tom Madison - personal site",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${inter.className} min-h-screen`}>
        <header className="border-b">
            <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between gap-4">
                <Link href="/" className="font-semibold">
                    temadison.com
                </Link>
                <NavLinks />
            </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        <footer className="border-t">
            <div className="mx-auto max-w-5xl px-4 py-6 text-sm opacity-70">
                © {new Date().getFullYear()} Tom Madison
            </div>
        </footer>
        </body>
        </html>
    );
}
