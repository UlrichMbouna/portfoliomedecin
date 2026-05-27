import React from 'react';

export default function StatsSection() {
    return (
        <section className="py-16 bg-primary text-on-primary">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <h2 className="font-label-md text-center opacity-70 uppercase tracking-widest mb-12">Impact en chiffres</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-gutter text-center">
                    <div className="space-y-2">
                        <p className="font-display-lg text-4xl md:text-5xl">12+</p>
                        <p className="font-label-md text-secondary-fixed">Années d'expérience</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-display-lg text-4xl md:text-5xl">15k+</p>
                        <p className="font-label-md text-secondary-fixed">Patients accompagnés</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-display-lg text-4xl md:text-5xl">06</p>
                        <p className="font-label-md text-secondary-fixed">Spécialisations</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-display-lg text-4xl md:text-5xl">08</p>
                        <p className="font-label-md text-secondary-fixed">Certifications</p>
                    </div>
                </div>
            </div>
        </section>
    );
}