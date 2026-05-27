import React from 'react';

export default function Hero() {
    return (
        <section className="pt-32 pb-section-gap gradient-mesh" id="home">
            <div className="max-w-container-max mx-auto px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full">
                        <span className="material-symbols-outlined text-[18px]">verified_user</span>
                        <span className="font-label-md text-[12px] uppercase tracking-wider">Infirmier Diplômé d'État</span>
                    </div>
                    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
                        L'Excellence des Soins &amp; Leadership Clinique
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                        Engagement inébranlable envers le bien-être des patients et la précision médicale. Allier expertise technique avancée et empathie pour une prise en charge holistique.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                            Consulter mon parcours
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button className="border border-outline text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-all">
                            Télécharger CV
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-surface">
                        <img alt="Infirmier professionnel" className="w-full h-full object-cover" data-alt="A professional male nurse in clean, modern navy blue scrubs standing in a bright, high-tech hospital corridor. He has a warm yet confident expression, looking slightly away from the camera. The lighting is soft and professional, emphasizing a clinical yet compassionate atmosphere. The background features blurred glass partitions and minimalist medical equipment, maintaining a clean white and soft blue color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiU8l9tp2_Z7-gIbe87V3zV4RWu2cy7SDabeWj_XaL0Fhpi0YyK_Q0rf25q_GEKE7QKI0p0ossCc_FBH6hjuzvlllfk3A2WM392HavdFF8Ud4QWCy6-IA0ynVZnMRA7R66SAereV6HIzMCTwrnhPzswk2q-DfrVn9NUhHHw-IFjNCe86wquHq7t0q-hlR8BjwkCf2_Mu0OU2qZ-ACaFX0FwQ68iC6UdEmBW_2owpYhMotC1j3gwMQz0Xr4LxiCo1Qgh2jfH95qsiQ"/>
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-2xl shadow-xl border border-outline-variant/30 hidden lg:block">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container">
                                <span className="material-symbols-outlined" data-weight="fill">medical_services</span>
                            </div>
                            <div>
                                <p className="font-label-md text-primary">Disponibilité</p>
                                <p className="font-caption text-secondary">Secteur Hospitalier &amp; Libéral</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}