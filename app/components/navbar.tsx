'use client'
import { useState } from 'react'
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigationItems = [
        { href: "/", label: "Accueil" },
        { href: "/expertise-clinique", label: "Expertise clinique" },
        { href: "/methodologie-soins", label: "Méthodologie soins" },
        { href: "/#temoignages", label: "Témoignages" },
    ]

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface-container/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
            <nav className="relative flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full">
                <div className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed tracking-tight">
                    Nursing Portfolio
                </div>

                <div className="hidden md:flex items-center gap-gutter">
                    {navigationItems.map((item, index) => (
                        <Link
                            key={item.href}
                            className={`font-label-md text-label-md cursor-pointer active:opacity-70 transition-all ${
                                index === 0
                                    ? "text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1"
                                    : "text-secondary dark:text-secondary-fixed hover:text-primary"
                            }`}
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link href="/#contact" className="ml-4 gradient-cta px-6 py-2 rounded-xl font-label-md transition-all shadow-md hover:opacity-95 animate-pulse-glow">
                        Contact
                    </Link>
                </div>

                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    <span className="material-symbols-outlined">{isMenuOpen ? "close" : "menu"}</span>
                </button>

                {isMenuOpen ? (
                    <div
                        id="mobile-menu"
                        className="absolute top-full left-0 right-0 md:hidden mt-3 rounded-2xl border border-outline-variant/30 bg-surface shadow-lg p-4"
                    >
                        <div className="flex flex-col gap-2">
                            {navigationItems.map((item, index) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`rounded-xl px-4 py-3 font-label-md text-label-md transition-colors ${
                                        index === 0
                                            ? "bg-secondary-container text-primary"
                                            : "text-secondary hover:bg-surface-container-low hover:text-primary"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/#contact"
                                className="mt-2 gradient-cta px-6 py-3 rounded-xl font-label-md shadow-md text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                ) : null}
            </nav>
        </header>
    )
}
