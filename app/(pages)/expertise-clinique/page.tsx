import React from 'react';
import Image from 'next/image';

export default function ExpertiseClinique() {
    return (
        <main className="mt-20">
            {/* Hero Section */}
            <header className="relative py-24 md:py-32 overflow-hidden bg-surface-container-lowest">
                <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
                    <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-4">
              Engagement & Rigueur
            </span>
                        <h1 className="font-display-lg text-display-lg md:text-display-lg text-primary mb-6">
                            Expertise Clinique & Parcours
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            Une approche soignante ancrée dans la précision technique et l'humanité, forgée par des années d'intervention en milieux critiques et de coordination stratégique.
                        </p>
                    </div>
                </div>
                {/* Decorative Medical Abstract */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <Image
                        className="w-full h-full object-cover grayscale"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCshgGNpkBYMeHG7yuumcsXQeax8dtAwX27l8o1YUpc1DhXXZZqP2qH79voIP8_xBfmJlQS7KhJekGJyTiAUkB3gpHMvnSp5ctFRc8uwj0Ls4z455wyMVS8QrPvNpW1WXjgsSLDD9PxdgrQWhfvLfbPSRSarxaGZ7DtBITYriP8fBTJewRnygZYfFm064Z05jqGaKpmgjcGg06UJgJWBco9MDWBjkQ5Z5m1SFFDQEwK1dxfVsrBAN4iEtgi3KsiVwojjpG3DprtjZ0"
                        alt="A minimalist architectural shot of a modern hospital corridor"
                        fill
                        sizes="50vw"
                        priority
                    />
                </div>
            </header>

            {/* Piliers de Soins (Bento Grid) */}
            <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="font-headline-md text-headline-md text-primary">Piliers de Soins</h2>
                        <p className="text-on-surface-variant mt-2">Mes domaines fondamentaux d'intervention clinique.</p>
                    </div>
                    <div className="h-px flex-grow bg-outline-variant/30 mx-8 hidden md:block mb-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                    {/* Urgences */}
                    <div className="md:col-span-8 group expertise-card bg-surface-container-low border border-outline-variant/20 rounded-xl p-8 relative overflow-hidden transition-all hover:shadow-[0_4px_12px_rgba(26,54,93,0.08)]">
                        <div className="flex flex-col h-full relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 card-icon">
                medical_services
              </span>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Urgences & Soins Critiques</h3>
                            <p className="text-on-surface-variant font-body-md max-w-lg mb-6">
                                Prise en charge de pathologies aiguës, gestion du stress en milieu instable et maîtrise des technologies de réanimation avancées.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-caption font-label-md">Réanimation</span>
                                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-caption font-label-md">Triage</span>
                                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-caption font-label-md">Urgences Vitales</span>
                            </div>
                        </div>
                        <div className="absolute -right-16 -bottom-16 w-64 h-64 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Image
                                className="object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0QtgElVCImF6sE_EWjR9aiyNvoFgAlLgUeQPlo2WcC-v4ec6z5LUH1uOOhtopuxKEOdaPU_ps8vhDFVXYkS6_Im4cwwK2ZcmU91-APX3bP-6w2j5wpgzWuZdciFCcNXJtbKnbu5Vy4tqlj0YvdhUSEvLWFH9ym5gy-Q1JbCtjTUt5xrvXKiX4uWR8E1IhKH4Or0MzQhEQ4e3QvkdEkHA0EBlMQhKa3SJb8vQK8l_rpv38GZQTNV3Ee5HwByIW7_Ou5FYliEFnIZA"
                                alt="Professional medical monitoring equipment"
                                fill
                                sizes="256px"
                            />
                        </div>
                    </div>

                    {/* Coordination */}
                    <div className="md:col-span-4 expertise-card bg-white border border-outline-variant/20 rounded-xl p-8 transition-all hover:shadow-[0_4px_12px_rgba(26,54,93,0.08)]">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 card-icon">
              account_tree
            </span>
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Coordination de Soins</h3>
                        <p className="text-on-surface-variant font-body-md">
                            Optimisation des parcours patients et interface pluridisciplinaire pour une prise en charge globale et cohérente.
                        </p>
                    </div>

                    {/* Éducation */}
                    <div className="md:col-span-4 expertise-card bg-white border border-outline-variant/20 rounded-xl p-8 transition-all hover:shadow-[0_4px_12px_rgba(26,54,93,0.08)]">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 card-icon">
              school
            </span>
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Éducation Thérapeutique</h3>
                        <p className="text-on-surface-variant font-body-md">
                            Accompagnement des patients chroniques vers l'autonomie par la pédagogie et le suivi personnalisé.
                        </p>
                    </div>

                    {/* Mentorat */}
                    <div className="md:col-span-8 group expertise-card bg-primary-container text-on-tertiary rounded-xl p-8 relative overflow-hidden transition-all">
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
                            <div className="flex-1">
                <span className="material-symbols-outlined text-on-primary-container text-4xl mb-6 card-icon">
                  groups
                </span>
                                <h3 className="font-headline-sm text-headline-sm text-white mb-4">Mentorat & Transmission</h3>
                                <p className="text-on-primary-container font-body-md mb-6">
                                    Formation des futurs professionnels et intégration des nouveaux collaborateurs au sein des équipes cliniques.
                                </p>
                                <button className="border border-on-primary-container/30 px-6 py-2 rounded-xl text-white font-label-md hover:bg-white/5 transition-colors">
                                    Découvrir mes méthodes
                                </button>
                            </div>
                            <div className="relative w-full md:w-48 h-48 rounded-xl overflow-hidden shadow-xl border border-white/10">
                                <Image
                                    className="object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-z1zh__-vjrqFnhiQ33kC24m9UavLGQTv4lrQtqZUQFDB0soVwiVHnQ6YRPza7xYajGVJaenGF5anEgc7nZFawySzJWLLp4j9llUOT3P5EUqRhpa8dn8vi0qdHOTZKFMp2yYL5jMq_2UDyuNibh4xL9elDp5sOPSZoV2kfRcfObQ_qlHAh-OeDXRvuMBDdXz0wjC8-asEILm-bwWbmijhioUr8Fbkp3qTZR4h0HNbCGigBok3_UzbNvvnYAJcFBogoO42DeW4a-c"
                                    alt="Abstract medical glass laboratory equipment"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 192px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interventions & Projets (Timeline Layout) */}
            <section className="py-section-gap bg-surface-container-low">
                <div className="max-w-container-max mx-auto px-margin-desktop">
                    <div className="text-center mb-16">
                        <h2 className="font-headline-md text-headline-md text-primary">Interventions & Projets</h2>
                        <p className="text-on-surface-variant max-w-xl mx-auto mt-4">
                            Analyses de cas et initiatives d'amélioration de la qualité des soins.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Case Study 1 */}
                        <div className="flex flex-col md:flex-row gap-gutter group">
                            <div className="md:w-1/3">
                                <div className="sticky top-28">
                                    <span className="font-label-md text-label-md text-primary tracking-widest mb-2 block">2023 - HÔPITAL CENTRAL</span>
                                    <h4 className="font-headline-sm text-headline-sm text-primary mb-4">Optimisation des protocoles de soins</h4>
                                    <div className="flex gap-2">
                    <span className="p-2 bg-white rounded-lg border border-outline-variant/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">
                        assignment_turned_in
                      </span>
                    </span>
                                        <p className="text-caption text-on-surface-variant leading-tight">
                                            Réduction de 15% du temps de transmission entre les équipes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3 bg-white border border-outline-variant/20 rounded-xl overflow-hidden p-0 flex flex-col md:flex-row shadow-sm group-hover:shadow-md transition-shadow">
                                <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                                    <Image
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb84lfjgVuaE8SE2u_Fos1B51b9sedcoeMyFVogoXvNkyaUQ0mfngsiiUvf-LOazTGOLJ9zNLXLAmBOLFeidyYjRq4vjrE912SfPZz5e_Gh9ULfRlSjM-5qLkNxq25jtWtSwd5fCX2soT5b_ejOINL_aGqETWpus-zSt4QTywz5ytAT9C3F8IkoulMDuEkiheM3meY8Bpb5mCXjNc0qyMV8bnUn7pp5MRZQ1zSinC3Uxg_nTDIAOhm_xHdFZDyxtZaiT8K1I3lVMo"
                                        alt="Modern hospital nurse station"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 30vw"
                                    />
                                </div>
                                <div className="md:w-3/5 p-8">
                                    <h5 className="font-label-md text-label-md text-primary mb-4">LE DÉFI</h5>
                                    <p className="text-on-surface-variant mb-6">
                                        Harmoniser les pratiques de soins infirmiers dans une unité de 30 lits pour garantir une continuity parfaite de l'information durant les relèves.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">
                        check_circle
                      </span>
                                            <span className="text-body-md text-on-surface">Audit des pratiques actuelles</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">
                        check_circle
                      </span>
                                            <span className="text-body-md text-on-surface">Digitalisation des fiches de suivi</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Case Study 2 */}
                        <div className="flex flex-col md:flex-row-reverse gap-gutter group">
                            <div className="md:w-1/3">
                                <div className="sticky top-28 md:text-right">
                                    <span className="font-label-md text-label-md text-primary tracking-widest mb-2 block">2022 - INNOVATION SANTÉ</span>
                                    <h4 className="font-headline-sm text-headline-sm text-primary mb-4">Système de suivi patient</h4>
                                    <div className="flex gap-2 md:justify-end">
                                        <p className="text-caption text-on-surface-variant leading-tight md:text-right">
                                            Amélioration du taux de satisfaction patient de 25%.
                                        </p>
                                        <span className="p-2 bg-white rounded-lg border border-outline-variant/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">
                        monitoring
                      </span>
                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3 bg-white border border-outline-variant/20 rounded-xl overflow-hidden p-0 flex flex-col md:flex-row-reverse shadow-sm group-hover:shadow-md transition-shadow">
                                <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                                    <Image
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC96CPcwwW_reKbrznlTlZMHDByPyblVhWASGj0U93YGRoGCWOIp2mrrhA6Zj6P6L7DgEBcEraGgdV3SupvzU5sKo-2Bat60kNn6I3K9xse9LJXzP_JZ3KpWFjNmikb5f5wr6nIO-irHwL1D3b-XKyQWyJWjcDywBoG-vwsU_CCgDmOFTkwIaGSs4IS_8wP9onvcyPSsEXkPzrtBzKH_ZT99KAwaBUZOen2BDyiY94r9S-jInxdSOp5IXDMaJCudTeJRbus9dZbx4c"
                                        alt="Health data connectivity"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 30vw"
                                    />
                                </div>
                                <div className="md:w-3/5 p-8">
                                    <h5 className="font-label-md text-label-md text-primary mb-4">L'APPROCHE</h5>
                                    <p className="text-on-surface-variant mb-6">
                                        Développement d'un outil de suivi post-opératoire à domicile permettant une détection précoce des complications potentielles.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">
                        check_circle
                      </span>
                                            <span className="text-body-md text-on-surface">Interface simplifiée pour patients âgés</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">
                        check_circle
                      </span>
                                            <span className="text-body-md text-on-surface">Alertes automatiques pour l'équipe soignante</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Case Study 3 */}
                        <div className="flex flex-col md:flex-row gap-gutter group">
                            <div className="md:w-1/3">
                                <div className="sticky top-28">
                                    <span className="font-label-md text-label-md text-primary tracking-widest mb-2 block">INTERNATIONAL</span>
                                    <h4 className="font-headline-sm text-headline-sm text-primary mb-4">Missions humanitaires</h4>
                                    <div className="flex gap-2">
                    <span className="p-2 bg-white rounded-lg border border-outline-variant/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">
                        public
                      </span>
                    </span>
                                        <p className="text-caption text-on-surface-variant leading-tight">
                                            Interventions d'urgence en zones de crise.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3 bg-white border border-outline-variant/20 rounded-xl overflow-hidden p-0 flex flex-col md:flex-row shadow-sm group-hover:shadow-md transition-shadow">
                                <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                                    <Image
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAybbEXlr2goO_gDmECGmNPeqJ7X9Idg_umX1U_jDPFbx2JJVHAg2CzRNyVZ8XS67U4hcAt_xh3jYAaXuPSD54p00XucsrxzvW4Pck5vwQzRNChVRO6OOsyfzbequitcp0CkTNFJkz2_jtxCrfBMvuJbuWLk1Il45oP2s3MA8m0zpZPlYFGrUcwE5lXjWUG_WVYQESjFQHkSrBB_dem-Rs5Zsku_3jqYrqu1onbPVD_yXQYwkn7ph92a6x1-hUv7kdWVFkGap8Qqv4"
                                        alt="Minimalist mobile medical clinic"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 30vw"
                                    />
                                </div>
                                <div className="md:w-3/5 p-8">
                                    <h5 className="font-label-md text-label-md text-primary mb-4">L'IMPACT</h5>
                                    <p className="text-on-surface-variant mb-6">
                                        Mise en place de dispensaires de campagne et formation de relais de santé locaux dans des contextes de ressources limitées.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">
                        check_circle
                      </span>
                                            <span className="text-body-md text-on-surface">Gestion logistique de médicaments critiques</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">
                        check_circle
                      </span>
                                            <span className="text-body-md text-on-surface">Adaptation des protocoles d'hygiène</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop text-center">
                <div className="bg-primary py-16 px-8 rounded-[2rem] md:rounded-full shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
                    <h2 className="font-headline-md text-headline-md text-white mb-6 relative z-10">
                        Prêt à collaborer sur votre prochain projet clinique ?
                    </h2>
                    <p className="text-on-primary-container max-w-2xl mx-auto mb-10 text-body-lg relative z-10">
                        Mon expertise est à votre service pour améliorer les parcours de soins et la qualité d'intervention au sein de votre établissement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <button className="bg-white text-primary px-10 py-4 rounded-xl font-label-md hover:shadow-lg transition-all active:scale-95">
                            Discutons de votre projet
                        </button>
                        <button className="border border-white/30 text-white px-10 py-4 rounded-xl font-label-md hover:bg-white/10 transition-all">
                            Consulter mon CV complet
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}