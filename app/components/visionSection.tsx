import React from 'react';

export default function VisionSection() {
    return (
        <section className="py-section-gap bg-surface" id="expertise">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="font-headline-md text-headline-md text-primary mb-6">La Vision du Soin</h2>
                        <p className="font-body-md text-on-surface-variant mb-8">
                            Ma pratique infirmière repose sur l'équilibre délicat entre la rigueur scientifique nécessaire à la sécurité des soins et l'humanité indispensable à la guérison.
                        </p>
                        <div className="space-y-4">
                        <div className="p-4 bg-secondary-container/30 rounded-xl border border-secondary-container flex gap-4 glass-effect gradient-border animate-scale-in">
                            <span className="material-symbols-outlined text-primary">clinical_notes</span>
                            <div>
                                <h4 className="font-label-md text-primary">Rigueur Clinique</h4>
                                <p className="font-caption text-secondary">Protocoles stricts et surveillance continue.</p>
                            </div>
                        </div>
                        <div className="p-4 bg-primary-fixed/30 rounded-xl border border-primary-fixed flex gap-4 glass-effect gradient-border animate-scale-in">
                            <span className="material-symbols-outlined text-primary">favorite</span>
                            <div>
                                <h4 className="font-label-md text-primary">Approche Humaniste</h4>
                                <p className="font-caption text-secondary">Écoute active et soutien psychologique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-gutter">
                        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 hover:shadow-md transition-all glass-effect-hover gradient-surface gradient-border animate-scale-in">
                            <div className="h-1 w-20 rounded-full animate-border-dance mb-6"></div>
                            <span className="material-symbols-outlined text-4xl text-primary mb-6 animate-icon-spin">emergency</span>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Urgences &amp; Réanimation</h3>
                            <p className="font-body-md text-on-surface-variant">
                                Gestion du stress en situation critique, maîtrise des dispositifs de suppléance vitale et réactivité immédiate pour la sauvegarde du patient.
                            </p>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 hover:shadow-md transition-all glass-effect-hover gradient-surface gradient-border animate-scale-in">
                            <div className="h-1 w-20 rounded-full animate-border-dance mb-6"></div>
                            <span className="material-symbols-outlined text-4xl text-primary mb-6 animate-icon-spin">psychology</span>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Éducation Thérapeutique</h3>
                            <p className="font-body-md text-on-surface-variant">
                                Accompagnement des patients chroniques vers l'autonomie par la pédagogie, l'adaptation des modes de vie et le suivi nutritionnel.
                            </p>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 hover:shadow-md transition-all glass-effect-hover gradient-surface gradient-border animate-scale-in">
                            <div className="h-1 w-20 rounded-full animate-border-dance mb-6"></div>
                            <span className="material-symbols-outlined text-4xl text-primary mb-6 animate-icon-spin">groups</span>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Leadership d'Équipe</h3>
                            <p className="font-body-md text-on-surface-variant">
                                Coordination des soins pluridisciplinaires, encadrement des stagiaires et gestion des flux patients pour optimiser l'unité de soin.
                            </p>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 hover:shadow-md transition-all glass-effect-hover gradient-surface gradient-border animate-scale-in">
                            <div className="h-1 w-20 rounded-full animate-border-dance mb-6"></div>
                            <span className="material-symbols-outlined text-4xl text-primary mb-6 animate-icon-spin">inventory_2</span>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Gestion des Risques</h3>
                            <p className="font-body-md text-on-surface-variant">
                                Vigilance pharmacologique, prévention des infections nosocomiales et amélioration continue de la qualité des soins.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
