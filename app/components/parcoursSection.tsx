import React from 'react';

export default function ParcoursSection() {
    return (
        <section className="py-section-gap bg-surface-container-low" id="parcours">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-headline-md text-headline-md text-primary">Parcours Professionnel</h2>
                        <p className="font-body-md text-on-surface-variant">Une trajectoire dédiée à l'expertise technique et humaine.</p>
                    </div>
                    <div className="hidden md:block">
            <span className="font-label-md text-primary flex items-center gap-2">
              Expériences récentes <span className="material-symbols-outlined">expand_more</span>
            </span>
                    </div>
                </div>
                <div className="space-y-12 timeline-line pl-8 relative">
                    {/* Entry 1 */}
                    <div className="relative">
                        <div className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-surface"></div>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="md:col-span-1">
                                <span className="font-label-md text-primary">2020 — Présent</span>
                                <h4 className="font-headline-sm text-[18px] text-primary mt-2">CHRU de Lille</h4>
                            </div>
                            <div className="md:col-span-3 bg-surface p-8 rounded-2xl border border-outline-variant/30">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-headline-sm text-headline-sm text-primary">Infirmier en Réanimation Polyvalente</h3>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[11px] font-label-md rounded uppercase">Critique</span>
                                    </div>
                                </div>
                                <p className="font-body-md text-on-surface-variant mb-6">
                                    Prise en charge de patients en détresse vitale multi-viscérale. Maîtrise de l'épuration extra-rénale, ventilation mécanique invasive et monitorage hémodynamique avancé (PICCO, Swan-Ganz).
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-surface-container text-on-secondary-container rounded-full text-caption">Ventilation</span>
                                    <span className="px-3 py-1 bg-surface-container text-on-secondary-container rounded-full text-caption">Hémodynamique</span>
                                    <span className="px-3 py-1 bg-surface-container text-on-secondary-container rounded-full text-caption">Dialyse</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Entry 2 */}
                    <div className="relative">
                        <div className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-outline-variant border-4 border-surface"></div>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="md:col-span-1">
                                <span className="font-label-md text-secondary">2016 — 2020</span>
                                <h4 className="font-headline-sm text-[18px] text-primary mt-2">Hôpital Européen</h4>
                            </div>
                            <div className="md:col-span-3 bg-surface p-8 rounded-2xl border border-outline-variant/30">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-headline-sm text-headline-sm text-primary">Service des Urgences &amp; SMUR</h3>
                                </div>
                                <p className="font-body-md text-on-surface-variant mb-6">
                                    Accueil et orientation des urgences (IAO), interventions pré-hospitalières. Gestion de l'urgence traumatique et cardiovasculaire en milieu hostile.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-surface-container text-on-secondary-container rounded-full text-caption">Triage</span>
                                    <span className="px-3 py-1 bg-surface-container text-on-secondary-container rounded-full text-caption">Traumatologie</span>
                                    <span className="px-3 py-1 bg-surface-container text-on-secondary-container rounded-full text-caption">SMUR</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}