'use client'

import React, { useEffect, useRef, useState } from 'react';

const backgrounds = [
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80",
];

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const timer = window.setTimeout(() => setIsLoaded(true), 50);
        const bgInterval = window.setInterval(() => {
            setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 6000);

        return () => {
            window.clearTimeout(timer);
            window.clearInterval(bgInterval);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isLoaded) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        let animationFrame = 0;

        const particles = Array.from({ length: 70 }, () => ({
            x: Math.random(),
            y: Math.random(),
            size: Math.random() * 2.4 + 0.8,
            speedX: (Math.random() - 0.5) * 0.0008,
            speedY: (Math.random() - 0.5) * 0.0008,
            alpha: Math.random() * 0.22 + 0.04,
        }));

        const shapes = [
            { x: 0.14, y: 0.22, size: 44, color: 'rgba(109, 40, 217, 0.16)', type: 'circle' },
            { x: 0.84, y: 0.32, size: 56, color: 'rgba(245, 158, 11, 0.12)', type: 'square' },
            { x: 0.72, y: 0.72, size: 46, color: 'rgba(0, 32, 69, 0.16)', type: 'ring' },
        ];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = Math.max(window.innerHeight, 780);
        };

        const draw = () => {
            const { width, height } = canvas;
            context.clearRect(0, 0, width, height);

            particles.forEach((particle) => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < 0 || particle.x > 1) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > 1) particle.speedY *= -1;

                context.beginPath();
                context.fillStyle = `rgba(255,255,255,${particle.alpha})`;
                context.arc(particle.x * width, particle.y * height, particle.size, 0, Math.PI * 2);
                context.fill();
            });

            shapes.forEach((shape, index) => {
                const offsetY = Math.sin(Date.now() * 0.001 + index) * 10 - scrollPosition * 0.05;
                const x = shape.x * width;
                const y = shape.y * height + offsetY;

                context.save();
                context.translate(x, y);
                context.rotate(Date.now() * 0.00018 * (index + 1));
                context.strokeStyle = shape.color;
                context.fillStyle = shape.color;
                context.lineWidth = 2;

                if (shape.type === 'circle') {
                    context.beginPath();
                    context.arc(0, 0, shape.size, 0, Math.PI * 2);
                    context.fill();
                } else if (shape.type === 'square') {
                    context.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
                } else {
                    context.beginPath();
                    context.arc(0, 0, shape.size, 0, Math.PI * 2);
                    context.stroke();
                }
                context.restore();
            });

            animationFrame = window.requestAnimationFrame(draw);
        };

        resize();
        draw();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
            window.cancelAnimationFrame(animationFrame);
        };
    }, [isLoaded, scrollPosition]);

    return (
        <section className="pt-32 pb-section-gap relative overflow-hidden" id="home">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ opacity: isLoaded ? 0.55 : 0, transition: 'opacity 700ms ease' }}
            />

            {backgrounds.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 z-0 transition-opacity duration-700 ${
                        currentBgIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div
                        className="absolute inset-0 bg-center bg-cover"
                        style={{
                            backgroundImage: `url('${src}')`,
                            filter: "brightness(0.92) contrast(1.04)",
                            transform: `scale(1.08) translateY(${scrollPosition * 0.06}px)`,
                            transition: "transform 0.3s ease-out"
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(135deg, rgba(0,32,69,0.06) 0%, rgba(109,40,217,0.10) 52%, rgba(245,158,11,0.08) 100%)",
                            mixBlendMode: 'soft-light'
                        }}
                    />
                </div>
            ))}

            <div
                className="absolute inset-0 z-[5]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 30% 40%, rgba(109,40,217,0.10) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(245,158,11,0.08) 0%, transparent 40%)",
                    backdropFilter: 'blur(1px)'
                }}
            />

            <div
                className={`absolute w-32 h-32 rounded-3xl bg-gradient-to-tr from-white/5 to-white/10 backdrop-blur-lg -top-4 left-1/4 z-20 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 delay-300 hidden md:block`}
                style={{
                    animation: 'float 15s ease-in-out infinite',
                    transform: `rotate(12deg) translateY(${scrollPosition * 0.15}px)`,
                    border: '1px solid rgba(255,255,255,0.1)',
                }}
            />

            <div
                className={`absolute w-40 h-40 rounded-[32px] bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg bottom-16 right-[10%] z-20 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 delay-500 hidden lg:block`}
                style={{
                    animation: 'float 18s ease-in-out infinite',
                    transform: `rotate(-10deg) translateY(${-scrollPosition * 0.12}px)`,
                    border: '1px solid rgba(255,255,255,0.1)',
                }}
            />

            <div className="relative z-30 max-w-container-max mx-auto px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
                <div className="relative z-30 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full glass-effect animate-scale-in">
                        <span className="material-symbols-outlined text-[18px] animate-icon-spin">verified_user</span>
                        <span className="font-label-md text-[12px] uppercase tracking-wider">Infirmier Diplômé d'État</span>
                    </div>
                    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight animate-scale-in">
                        L'Excellence des Soins &amp; Leadership Clinique
                    </h1>
                    <p className="font-body-lg text-body-lg text-white max-w-xl animate-scale-in">
                        Engagement inébranlable envers le bien-être des patients et la précision médicale. Allier expertise technique avancée et empathie pour une prise en charge holistique.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="gradient-cta px-8 py-4 rounded-xl font-label-md text-label-md shadow-lg hover:shadow-xl transition-all flex items-center gap-2 animate-pulse-glow shine-wrap">
                            Consulter mon parcours
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button className="border border-outline text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-all glass-effect-hover">
                            Télécharger CV
                        </button>
                    </div>
                </div>
                <div className="relative z-30 animate-float">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-surface">
                        <img alt="Infirmier professionnel" className="w-full h-full object-cover" data-alt="A professional male nurse in clean, modern navy blue scrubs standing in a bright, high-tech hospital corridor. He has a warm yet confident expression, looking slightly away from the camera. The lighting is soft and professional, emphasizing a clinical yet compassionate atmosphere. The background features blurred glass partitions and minimalist medical equipment, maintaining a clean white and soft blue color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiU8l9tp2_Z7-gIbe87V3zV4RWu2cy7SDabeWj_XaL0Fhpi0YyK_Q0rf25q_GEKE7QKI0p0ossCc_FBH6hjuzvlllfk3A2WM392HavdFF8Ud4QWCy6-IA0ynVZnMRA7R66SAereV6HIzMCTwrnhPzswk2q-DfrVn9NUhHHw-IFjNCe86wquHq7t0q-hlR8BjwkCf2_Mu0OU2qZ-ACaFX0FwQ68iC6UdEmBW_2owpYhMotC1j3gwMQz0Xr4LxiCo1Qgh2jfH95qsiQ"/>
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-2xl shadow-xl border border-outline-variant/30 hidden lg:block glass-effect gradient-border animate-scale-in">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container animate-pulse-glow">
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
