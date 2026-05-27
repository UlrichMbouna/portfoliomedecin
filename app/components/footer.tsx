import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-surface-container-low dark:bg-tertiary-container text-on-surface dark:text-on-tertiary-fixed border-t border-outline-variant/20 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto py-base px-margin-desktop gap-gutter min-h-[120px]">
                <div className="flex flex-col items-center md:items-start">
                    <div className="font-headline-sm text-headline-sm text-primary mb-2">Nursing Portfolio</div>
                    <p className="font-caption text-caption text-on-surface-variant dark:text-on-tertiary-fixed-variant">
                        © 2024 Professional Nursing Portfolio. Calme et Précision.
                    </p>
                </div>
                <div className="flex gap-8">
                    <a className="font-caption text-caption text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Mentions Légales</a>
                    <a className="font-caption text-caption text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Confidentialité</a>
                    <a className="font-caption text-caption text-primary font-bold hover:text-primary transition-colors" href="#">Contact</a>
                </div>
            </div>
        </footer>
    );
}