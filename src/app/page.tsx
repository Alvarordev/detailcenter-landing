import AboutSection from "@/components/Landing/AboutSection";
import HeroLanding from "@/components/Landing/HeroSection";
import ServicesSection from "@/components/Landing/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroLanding/>

      <section className="bg-[#1a1a1a] h-[300px] lg:min-h-[800px] w-full relative antialiased ">
        <div className="w-full h-[700px] ">
          <Image src="/car-washing.avif" alt="washing" fill />
        </div>
      </section>

      <ServicesSection/>

      <AboutSection/>
    </main>
  );
}
