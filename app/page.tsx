import Image from "next/image";
import Header from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import StatsSection from "@/app/components/stat";
import VisionSection from "@/app/components/visionSection";
import Footer from "@/app/components/footer";
import TestimonialsSection from "@/app/components/testimonialsSection";
import ParcoursSection from "@/app/components/parcoursSection";

export default function Home() {
  return (
      <>
      <Hero/>
        <StatsSection/>
        <VisionSection/>
        <ParcoursSection/>
        <TestimonialsSection/>
      <Footer/>
      </>
  );
}
