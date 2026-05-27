import Hero from "@/app/components/hero";
import StatsSection from "@/app/components/stat";
import VisionSection from "@/app/components/visionSection";
import Footer from "@/app/components/footer";
import TestimonialsSection from "@/app/components/testimonialsSection";
import ParcoursSection from "@/app/components/parcoursSection";
import Link from "next/link";

export default function Home() {
  return (
      <>
      <Hero/>
        <StatsSection/>
        <VisionSection/>
        <ParcoursSection/>
        <TestimonialsSection/>
        <section id="contact" className="py-16">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="rounded-3xl gradient-cta p-10 md:p-14 shadow-xl">
              <div className="max-w-3xl">
                <p className="font-label-md text-label-md uppercase tracking-widest text-white/80 mb-4">Prise de contact</p>
                <h2 className="font-headline-md text-headline-md text-white mb-4">
                  Une expertise clinique structurée, du terrain à la méthodologie.
                </h2>
                <p className="font-body-lg text-white/85 mb-8">
                  Explorez les pages dédiées pour comprendre à la fois la profondeur clinique et la rigueur de la méthode.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/expertise-clinique" className="rounded-xl bg-white text-primary px-6 py-3 font-label-md shadow-md">
                    Voir expertise clinique
                  </Link>
                  <Link href="/methodologie-soins" className="rounded-xl border border-white/40 text-white px-6 py-3 font-label-md">
                    Voir méthodologie soins
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer/>
      </>
  );
}
