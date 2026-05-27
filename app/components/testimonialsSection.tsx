import React from 'react';

export default function TestimonialsSection() {
    return (
        <section className="py-section-gap bg-surface" id="temoignages">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="text-center mb-16">
                    <h2 className="font-headline-md text-headline-md text-primary mb-4">Reconnaissance Professionnelle</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-gutter">
                    <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/20 relative">
                        <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-8">format_quote</span>
                        <p className="font-body-md italic text-on-surface mb-8 relative z-10">
                            "Un professionnel d'une rigueur exemplaire dont le calme en situation de crise est un atout majeur pour l'équipe de réanimation."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-secondary-container"></div>
                            <div>
                                <p className="font-label-md text-primary">Dr. Antoine Moreau</p>
                                <p className="font-caption text-secondary">Chef de Service Réanimation</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/20 relative">
                        <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-8">format_quote</span>
                        <p className="font-body-md italic text-on-surface mb-8 relative z-10">
                            "Au-delà de ses compétences techniques, sa capacité d'écoute et son empathie envers les familles font de lui un soignant d'exception."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-secondary-container"></div>
                            <div>
                                <p className="font-label-md text-primary">Sophie Durand</p>
                                <p className="font-caption text-secondary">Cadre de Santé</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/20 relative">
                        <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-8">format_quote</span>
                        <p className="font-body-md italic text-on-surface mb-8 relative z-10">
                            "Pédagogue et investi, il a su transformer notre service en intégrant de nouveaux protocoles de soins innovants."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-secondary-container"></div>
                            <div>
                                <p className="font-label-md text-primary">Marc Lefebvre</p>
                                <p className="font-caption text-secondary">Directeur des Soins</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}