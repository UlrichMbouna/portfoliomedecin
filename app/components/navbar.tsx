'use client'
import { useState } from 'react'
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface-container/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm h-20">
            <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-full">
                <div className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed tracking-tight">
                    Nursing Portfolio
                </div>

                {/* Navigation Desktop */}
                <div className="hidden md:flex items-center gap-gutter">

                    <Link className="font-label-md text-label-md text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 cursor-pointer active:opacity-70 transition-all" href="/">
                        Accueil
                    </Link>
                    <Link className="font-label-md text-label-md text-secondary dark:text-secondary-fixed hover:text-primary cursor-pointer active:opacity-70 transition-all" href="/expertise-clinique">
                        Expertise
                    </Link>
                    <Link className="font-label-md text-label-md text-secondary dark:text-secondary-fixed hover:text-primary cursor-pointer active:opacity-70 transition-all" href="/methodologie-soins">
                        methodologie-soins
                    </Link>
                    <Link className="font-label-md text-label-md text-secondary dark:text-secondary-fixed hover:text-primary cursor-pointer active:opacity-70 transition-all" href="/temoignages">
                        Témoignages
                    </Link>

                    <button className="ml-4 bg-primary text-on-primary px-6 py-2 rounded-xl font-label-md hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md">
                        Contact
                    </button>
                </div>

                {/* Bouton Menu Mobile */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </nav>
        </header>
    )
}