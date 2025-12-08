"use client";

import Link from "next/link";
import { Container } from "./Container";
import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
            <Container>
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-accent to-indigo-600 rounded-md group-hover:scale-110 transition-transform duration-200"></div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-gray-900 leading-none">
                                WebpCraft
                            </span>
                            <span className="text-[10px] text-softText leading-none">
                                Craft Perfect Images
                            </span>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <div className="flex items-center">
                        <Link
                            href="/bulk"
                            className={`px-4 py-2 rounded-md transition-all duration-160 font-medium ${pathname === "/bulk"
                                    ? "text-accent bg-accent/10"
                                    : "text-softText hover:text-accent hover:bg-accent/5"
                                }`}
                        >
                            Bulk Converter
                        </Link>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
