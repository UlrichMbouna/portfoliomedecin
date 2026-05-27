import React from 'react';
import Image from 'next/image';

export default function MethodologieSoins() {
    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center gradient-mesh rounded-3xl">
                <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 gradient-text">
                    Rigueur Méthodologique.<br />Résultats Humains.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                    L'excellence des soins repose sur une structure clinique éprouvée alliée à une empathie constante. Découvrez mon approche systématique de la santé.
                </p>
            </section>

            {/* Processus de Soin (Methodology Timeline) */}
            <section className="py-section-gap bg-surface-container-lowest">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="font-headline-md text-headline-md text-primary mb-4">Processus de Soin</h2>
                        <div className="h-1 w-20 bg-primary-fixed-dim mx-auto md:mx-0"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
                        {/* Step 1 */}
                        <div className="group">
                            <div className="flex flex-col h-full bg-white border border-outline-variant/30 rounded-xl p-8 hover:shadow-[0_4px_12px_rgba(26,54,93,0.08)] transition-all duration-300 gradient-border">
                                <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    analytics
                  </span>
                                </div>
                                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Évaluation</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Recueil exhaustif des données cliniques, anamnèse précise et examen physique rigoureux pour comprendre le contexte global du patient.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="group">
                            <div className="flex flex-col h-full bg-white border border-outline-variant/30 rounded-xl p-8 hover:shadow-[0_4px_12px_rgba(26,54,93,0.08)] transition-all duration-300 gradient-border">
                                <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    assignment
                  </span>
                                </div>
                                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Diagnostic Infirmier</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Analyse critique des besoins perturbés et identification des problèmes de santé réels ou potentiels selon les normes NANDA-I.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="group">
                            <div className="flex flex-col h-full bg-white border border-outline-variant/30 rounded-xl p-8 hover:shadow-[0_4px_12px_rgba(26,54,93,0.08)] transition-all duration-300 gradient-border">
                                <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    medical_services
                  </span>
                                </div>
                                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Intervention</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Mise en œuvre des soins techniques et relationnels, avec une précision chirurgicale et un respect strict des protocoles de sécurité.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="group">
                            <div className="flex flex-col h-full bg-white border border-outline-variant/30 rounded-xl p-8 hover:shadow-[0_4px_12px_rgba(26,54,93,0.08)] transition-all duration-300 gradient-border">
                                <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                                </div>
                                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Évaluation des résultats</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    Mesure de l'efficacité thérapeutique, réajustement constant du plan de soin et transmission précise pour la continuité des soins.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Témoignages (Asymmetric Bento Layout) */}
            <section className="py-section-gap overflow-hidden">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                    <div className="mb-12 text-center">
                        <h2 className="font-headline-md text-headline-md text-primary mb-4">Paroles de Collaborateurs &amp; Patients</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Ceux qui travaillent à mes côtés au quotidien.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                        {/* Main Testimonial */}
                        <div className="md:col-span-8 glass-card border border-outline-variant/30 rounded-xl p-10 relative group">
              <span className="material-symbols-outlined text-primary-fixed-dim text-6xl absolute top-6 right-10 opacity-40">
                format_quote
              </span>
                            <div className="flex flex-col h-full justify-between">
                                <blockquote className="font-headline-sm text-headline-sm text-primary italic mb-8 relative z-10">
                                    "Une capacité rare à maintenir un calme absolu même dans les situations les plus critiques. Son expertise en réanimation et sa précision technique en font un pilier pour toute l'équipe soignante."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-md">
                                        <Image
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC086oZkgOH0vYt_URXsn9P5gC0_WmNgkHk873Kv9WU2OxBEltYJGV7TXuiDqLTMnHeagJ0BBwul6abFA04ZBQhdbTapgNv5O5Dc_ijJ1cEwo6HkBhGKb6m5Zr9wRFPbtkyLOkTDExtsVjbaBThgdTpkHmlf_PaaY2XCtLCpZTPufq__afZA7tcAm4jpbyKqrHfr3D3iwXnw1xspYWDymPOWfyOzburswE5C4k5Rw7DnDCZE39Db1lIIGAZeEPn6UJTDJr4XIbhV0k"
                                            alt="Dr. Jean-Luc Moreau - Chef de Service"
                                            fill
                                            sizes="64px"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-label-md text-label-md text-primary">Dr. Jean-Luc Moreau</p>
                                        <p className="font-caption text-caption text-on-surface-variant">Chef de Service, Soins Intensifs</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Testimonial 1 */}
                        <div className="md:col-span-4 bg-secondary-container border border-outline-variant/30 rounded-xl p-8 flex flex-col justify-between">
                            <p className="font-body-md text-body-md text-on-secondary-container mb-6 italic">
                                "L'empathie n'est pas qu'un mot, c'est sa manière d'être. Elle a su écouter mes peurs avant l'opération avec une patience infinie."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary font-bold">M</div>
                                <div>
                                    <p className="font-label-md text-label-md text-primary">Mme Marcelle D.</p>
                                    <p className="font-caption text-caption text-on-secondary-fixed-variant">Patiente post-opératoire</p>
                                </div>
                            </div>
                        </div>

                        {/* Side Testimonial 2 */}
                        <div className="md:col-span-4 bg-surface-container border border-outline-variant/30 rounded-xl p-8 flex flex-col justify-between">
                            <p className="font-body-md text-body-md text-on-surface mb-6 italic">
                                "Une rigueur exemplaire dans les transmissions. Travailler en binôme est un gage de sérénité et de sécurité pour les patients."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        className="object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmjCJUPbpPQjvtQqndfRM86lq_hC_-lNbVJ0aCkNqG9GZRzUI4QdKDhBSenO3MJDPfC80PyFdO2afbS9Gy7bMWuYM0jv_rxOuVXYYNkjWnbqOJPLmCwTBXnxBv0zGoHrSraI5cqqVWYEJWLx63kZjWLr6RPa1thWsPcGcwBrdhYVUOsVPee6AMpuS1Ifq2TrzDGODIRjnWIxRCGMLXr3q8T_F7AyvXjTwv5DuUaWloVBhHi-JTcZ_rpBw7DJV2sHkaR2h-5OhaRX4"
                                        alt="Sophie L. - Infirmière DE"
                                        fill
                                        sizes="48px"
                                    />
                                </div>
                                <div>
                                    <p className="font-label-md text-label-md text-primary">Sophie L.</p>
                                    <p className="font-caption text-caption text-on-surface-variant">Infirmière DE</p>
                                </div>
                            </div>
                        </div>

                        {/* Specialty Chips Bento */}
                        <div className="md:col-span-8 bg-primary-container text-white rounded-xl p-10 flex flex-col justify-center overflow-hidden relative">
                            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                            <h3 className="font-headline-sm text-headline-sm mb-6">Expertise Validée</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-white/10 rounded-full font-label-md text-label-md border border-white/20">Soins Intensifs</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full font-label-md text-label-md border border-white/20">Réanimation</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full font-label-md text-label-md border border-white/20">Gestion de Crise</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full font-label-md text-label-md border border-white/20">Douleur</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full font-label-md text-label-md border border-white/20">Pédiatrie</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full font-label-md text-label-md border border-white/20">Éthique</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-section-gap">
                <div className="max-w-4xl mx-auto px-margin-mobile text-center">
                    <div className="bg-surface-container-low rounded-3xl p-12 md:p-20 border border-outline-variant/20 shadow-[0_4px_12px_rgba(26,54,93,0.08)] gradient-surface gradient-border">
                        <h2 className="font-display-lg-mobile md:font-headline-md text-display-lg-mobile md:text-headline-md text-primary mb-8">
                            Collaborons pour des soins d'exception
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
                            Vous recherchez un profil alliant technicité hospitalière et dimension humaine ? Discutons de vos besoins cliniques.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-gutter">
                            <button className="bg-primary text-white px-10 py-4 rounded-full font-label-md text-label-md hover:opacity-90 transition-all active:scale-95 shadow-md">
                                Prendre contact
                            </button>
                            <button className="border border-primary text-primary px-10 py-4 rounded-full font-label-md text-label-md hover:bg-primary/5 transition-all active:scale-95">
                                Voir le CV complet
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
