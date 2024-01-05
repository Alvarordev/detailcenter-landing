/* eslint-disable @next/next/no-img-element */
import AboutSection from "@/components/Landing/AboutSection";
import HeroLanding from "@/components/Landing/HeroSection";
import ServicesSection from "@/components/Landing/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroLanding />

      <section className="bg-[#1a1a1a] h-[400px] lg:min-h-[500px] w-full relative antialiased flex px-4 justify-center items-center md:justify-start md:px-0">
        <img
          src="/car-washing.avif"
          alt=""
          className="object-cover absolute h-full w-full"
        />

        <div
          className="relative z-30 border-2 border-red-500 text-white bg-[#0e0e0e] 
          py-10 sm:py-16 px-10 w-[360px] sm:w-[400px] sm:ml-20 md:ml-32 lg:ml-44 lg:h-[400px] lg:px-5
         flex flex-col justify-center items-center gap-10"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            ¿Qué es <span className="text-red-500">Detailing?</span>
          </h3>

          <p className=" text-sm sm:text-base lg:text-base sm:px-3 text-center">
            El detailing automotriz es un servicio de alta calidad que va más
            allá del lavado convencional. Se centra en la limpieza y
            restauración minuciosa de cada detalle de tu vehículo, tanto
            interior como exterior.
          </p>
        </div>
      </section>

      <ServicesSection />

      <AboutSection />
    </main>
  );
}
